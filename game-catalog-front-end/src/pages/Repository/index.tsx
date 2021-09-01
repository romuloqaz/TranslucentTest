import { Formik, Form, FormikHelpers, Field } from 'formik';
import React, { useEffect } from 'react';
import { FiChevronLeft, FiGrid } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IGame from '../../models/IGame';
import { addGamesRequest } from '../../store/games/gamesActions';
import { RootState } from '../../store/rootReducer';
import { Header, Logo, Container } from './styles';

const Repository: React.FC = () => {
  const dispatch = useDispatch();

  const { games } = useSelector((state: RootState) => state.games);

  useEffect(() => {
    if (games) {
      games.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        return 0;
      });
    }
  }, [games]);

  return (
    <>
      <Header>
        <Logo>
          <FiGrid size={50} />
          <h2>Game_CatalogTC</h2>
        </Logo>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <hr />

      <Container>
        <Formik
          initialValues={{
            title: '',
            year: 0,
            console: '',
            personalNotes: '',
          }}
          onSubmit={(
            values: IGame,
            { setSubmitting }: FormikHelpers<IGame>,
          ) => {
            const jogo: IGame = values;
            jogo.completed = false;
            dispatch(addGamesRequest(jogo));
            setSubmitting(false);
          }}
        >
          <Form>
            <h1>Insert a new game</h1>
            <Field type="text" id="title" name="title" placeholder="title" />
            <Field type="number" id="year" name="year" placeholder="year" />
            <Field
              type="text"
              id="console"
              name="console"
              placeholder="console"
            />
            <Field
              type="text"
              id="personalNotes"
              name="personalNotes"
              placeholder="personalNotes"
            />
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Repository;
