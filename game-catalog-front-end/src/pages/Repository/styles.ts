import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #666;
    transition: color 0.2s;

    &:hover {
      color: #3d3d4d;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;

  h2 {
    color: #2c3a33;
    margin-top: 10px;
    margin-left: 5px;
  }
`;
