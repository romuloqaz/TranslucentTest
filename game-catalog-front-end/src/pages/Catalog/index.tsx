import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiCompass, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import IGame from '../../models/IGame';
import { fetchGamesRequest } from '../../store/games/gamesActions';
import { RootState } from '../../store/rootReducer';
import { Title, Form, Repositories, Logo } from './styles';

const Catalog: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [gameCatalog, setGameCatalog] = useState<IGame[]>([]);
  const dispatch = useDispatch();
  const { loading, games, error } = useSelector(
    (state: RootState) => state.games,
  );

  useEffect(() => {
    dispatch(fetchGamesRequest());
  }, []);

  useEffect(() => {
    if (games) {
      setGameCatalog(games);
      console.log('loading ======>', loading);
      console.log('GAMES ======>', games);
      console.log('error ======>', error);
      console.log('CATALOG +++>', gameCatalog);
    }
  }, [games]);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const searchText = games.filter((game) => {
        const itemData = game.title
          ? game.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setGameCatalog(searchText);
      setSearch(text);
    } else {
      setGameCatalog(games);
      setSearch(text);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Logo>
            <FiCompass size={50} />
            <h2>Game_CatalogTC</h2>
          </Logo>
          <Title>Explore a Games Catalog</Title>
          <Form>
            <input
              value={search}
              onChange={(e) => searchFilterFunction(e.target.value)}
              placeholder="Enter the game name"
            />
            <button type="submit">
              <FiPlus size={40} />
            </button>
          </Form>
          <Repositories>
            {gameCatalog.map((game) => (
              <div key={game.id}>
                <section>
                  <strong>{game.title}</strong>
                  <p>{game.year}</p>
                  <p>{game.console}</p>
                  <p>{game.completed}</p>
                  <p>{game.dateOfCompletion}</p>
                  <p>{game.personalNotes}</p>
                </section>
                <FiChevronRight size={20} />
              </div>
            ))}
          </Repositories>
        </div>
      )}
    </>
  );
};

export default Catalog;
