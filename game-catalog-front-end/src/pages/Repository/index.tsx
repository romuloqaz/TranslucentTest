import { Formik, Form } from 'formik';
import React from 'react';
import { FiChevronLeft, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import IGame from '../../models/IGame';
import { Header, Logo, Container } from './styles';

const Repository: React.FC = () => {
  const onSubmit = (values: IGame) => {
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
            year: null,
            console: '',
            completed: false,
            dateOfCompletion: null,
            personalNotes: '',
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <h1>Insert a new game</h1>
            <input type="text" placeholder="title" />
            <input type="number" placeholder="year" />
            <input type="text" placeholder="console" />
            <input type="text" placeholder="completed" />
            <input type="text" placeholder="date of completion" />
            <input type="text" placeholder="personal notes" />
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Repository;
