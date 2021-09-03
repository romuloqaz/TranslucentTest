import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiGrid, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IGame from '../../models/IGame';
import { fetchGamesRequest } from '../../store/games/gamesActions';
import { RootState } from '../../store/rootReducer';
import { Title, Form, Repositories, Logo, Error } from './styles';

const Catalog: React.FC = () => {
  const [searchTextGame, setSearchTextGame] = useState<string>('');
  const [gameCatalog, setGameCatalog] = useState<IGame[]>([]);
  const [inputError, setInputError] = useState<string>('');
  const dispatch = useDispatch();
  const { loading, games, loaded } = useSelector(
    (state: RootState) => state.games,
  );

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchGamesRequest());
    }
  }, [loaded]);

  useEffect(() => {
    if (games) {
      games.sort((gameA, gameB) => {
        if (gameA.year < gameB.year) return -1;
        if (gameA.year > gameB.year) return 1;
        return 0;
      });
      setGameCatalog(games);
    }
  }, [games]);

  useEffect(() => {
    if (gameCatalog.length === 0 && searchTextGame.length > 0) {
      setInputError('No games were found :(');
    } else {
      setInputError('');
    }
  }, [gameCatalog, searchTextGame]);

  const searchFilterFunction = (text: string) => {
    const searchText: IGame[] = games.filter((game) => {
      const itemData: string = game.title
        ? game.title.toUpperCase()
        : ''.toUpperCase();
      const textData: string = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setGameCatalog(searchText);
    setSearchTextGame(text);
  };

  const yearFormat = (yearGame) => {
    const currentYear: number = new Date().getFullYear();
    const year = currentYear - yearGame;
    if (year > 1) {
      return `${year} years old`;
    }
    return `${year} year old`;
  };

  return (
    <>
      <div>
        <Logo>
          <FiGrid size={50} />
          <h2>Game_CatalogTC</h2>
        </Logo>
        <Title>Explore a Games Catalog</Title>
        <Form hasError={!!inputError}>
          <input
            value={searchTextGame}
            onChange={(event) => searchFilterFunction(event.target.value)}
            placeholder="Enter the game name"
          />
          <Link to="repository">
            <button type="submit">
              <FiPlus size={40} />
            </button>
          </Link>
        </Form>
        {inputError && <Error>{inputError}</Error>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Repositories>
            {gameCatalog.map((game) => (
              <div key={game.id}>
                <section>
                  <strong>{game.title}</strong>
                  <p>{yearFormat(game.year)}</p>
                  <p>{game.console}</p>
                  {game.completed ? (
                    <p>completed on {game.dateOfCompletion}</p>
                  ) : (
                    <p>Not finished yet</p>
                  )}
                  <p>{game.personalNotes}</p>
                </section>
                <FiChevronRight size={20} />
              </div>
            ))}
          </Repositories>
        )}
      </div>
    </>
  );
};

export default Catalog;
