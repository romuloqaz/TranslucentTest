import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  FiChevronRight,
  FiChevronsDown,
  FiX,
  FiGrid,
  FiPlus,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import IGame from '../../models/IGame';
import { fetchGamesRequest } from '../../store/games/gamesActions';
import { RootState } from '../../store/rootReducer';
import {
  Title,
  Form,
  Repositories,
  Error,
  Loading,
  ListSearch,
  Logo,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

const Catalog: React.FC = () => {
  const [searchTextGame, setSearchTextGame] = useState<string>('');
  const [gameCatalog, setGameCatalog] = useState<IGame[]>([]);
  const [searchedGames, setSearchedGames] = useState<IGame[]>([]);
  const [inputError, setInputError] = useState<string>('');
  const [hasGameSelected, setHasGameSelected] = useState<boolean>(false);
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
    if (searchedGames.length === 0 && searchTextGame.length > 0) {
      setInputError('No games were found :(');
    } else {
      setInputError('');
    }
  }, [searchedGames, searchTextGame]);

  const searchFilter = (text: string) => {
    const searchText: IGame[] = games.filter((game) => {
      const itemData: string = game.title
        ? game.title.toUpperCase()
        : ''.toUpperCase();
      const textData: string = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchedGames(searchText);
    setSearchTextGame(text);
  };

  const yearFormat = (yearGame: number) => {
    const currentYear: number = new Date().getFullYear();
    const year = currentYear - yearGame;
    if (year > 1) {
      return `${year} years old`;
    }
    if (year === 1) {
      return `${year} year old`;
    }
    return 'Released this year';
  };

  const selectGame = (game: IGame) => {
    const gameSelected = [];
    gameSelected.push(game);
    setGameCatalog(gameSelected);
    setSearchedGames([]);
    setHasGameSelected(true);
    setSearchTextGame('');
  };

  const updateGames = () => {
    setGameCatalog(games);
    setSearchTextGame('');
    setHasGameSelected(false);
    toast.success('Updated List!');
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
            onChange={(event) => searchFilter(event.target.value)}
            placeholder="Search"
          />
          {hasGameSelected ? (
            <button type="button" onClick={() => updateGames()}>
              <FiX size={50} />
            </button>
          ) : (
            <Link to="repository">
              <button type="submit">
                <FiPlus size={60} />
              </button>
            </Link>
          )}
        </Form>
        {inputError && <Error>{inputError}</Error>}
        {!inputError && searchTextGame.length > 0 && (
          <ListSearch>
            <div>
              <FiChevronsDown size={30} />
              {searchedGames.map((game) => (
                <div key={game.id}>
                  <button type="button" onClick={() => selectGame(game)}>
                    {game.title}
                  </button>
                </div>
              ))}
            </div>
          </ListSearch>
        )}
        {loading ? (
          <Loading>
            <LinearProgress />
          </Loading>
        ) : (
          <Repositories>
            {gameCatalog.map((game) => (
              <div key={game.id}>
                <section>
                  <h2>{game.title}</h2>
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
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default Catalog;
