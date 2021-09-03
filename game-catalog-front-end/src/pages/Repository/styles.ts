import { shade } from 'polished';
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
    margin: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;

  form {
    margin-top: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin: 26px 0;
      font-size: 40px;
      color: #2c3a33;
      max-width: 450px;
      line-height: 56px;
    }

    h6 {
      margin-top: 5px;
    }

    div {
      margin-bottom: 15px;
      align-items: flex-start;
    }

    button {
      background: #3eb64a;
      border: 0;
      width: 80%;
      color: #fff;
      height: 60px;
      margin-top: 30px;
      font-weight: bold;
      transition: 0.2s background-color;
      &:hover {
        background: ${shade(0.2, '#3EB64A')};
      }
    }
  }
`;
