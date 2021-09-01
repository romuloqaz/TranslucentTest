import { Formik, Form, FormikHelpers, Field } from 'formik';
import React from 'react';
import { FiChevronLeft, FiGrid } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IGame from '../../models/IGame';
import { addGamesRequest } from '../../store/games/gamesActions';
import { Header, Logo, Container } from './styles';

interface Game {
  title: string;
  year: number;
  console: string;
  completed?: boolean | false;
  personalNotes: string;
}

const Repository: React.FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
  };

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
            console.log(jogo);
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
