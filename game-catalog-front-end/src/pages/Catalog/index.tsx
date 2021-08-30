import React, { useEffect } from 'react';
import { FiChevronRight, FiCompass, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGamesRequest } from '../../store/games/gamesActions';
import { RootState } from '../../store/rootReducer';
import { Title, Form, Repositories, Logo } from './styles';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, games, error } = useSelector(
    (state: RootState) => state.games,
  );

  useEffect(() => {
    dispatch(fetchGamesRequest());
    console.log('loading ======>', loading);
    console.log('GAMES ======>', games);
    console.log('error ======>', error);
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Logo>
            <FiCompass size={60} />
            <h1>Game_CatalogTC</h1>
          </Logo>
          <Title>Explore a Games Catalog</Title>
          <Form action="">
            <input placeholder="Enter the game name" />
            <button type="submit">
              <FiPlus size={40} />
            </button>
          </Form>
          <Repositories>
            <div>
              <section>
                <strong>metal gear</strong>
                <p>2016</p>
                <p>ps2</p>
                <p>completed</p>
                <p>88/08/2021</p>
                <p>
                  I really liked this game. A masterpiece from Kojima
                  productions.
                </p>
              </section>
              <FiChevronRight size={20} />
            </div>

            <div>
              <section>
                <strong>gran turismo</strong>
                <p>2016</p>
                <p>ps3</p>
                <p>completed</p>
                <p>88/08/2021</p>
                <p>great game of racing</p>
              </section>
              <FiChevronRight size={20} />
            </div>
          </Repositories>
        </div>
      )}
    </>
  );
};

export default Catalog;
