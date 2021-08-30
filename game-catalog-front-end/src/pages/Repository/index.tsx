import React from 'react';
import { FiChevronLeft, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Logo } from './styles';

const Repository: React.FC = () => {
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
    </>
  );
};

export default Repository;
