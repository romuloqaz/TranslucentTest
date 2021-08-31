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
    margin-top: 10px;
    margin-left: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    width: 380px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: red;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      color: orange;
      font-weight: 500;
      margin-top: 26px;
      transition: 0.2s background-color;
      &:hover {
        background: ${shade(0.2, '#3EB64A')};
      }
    }

    input {
      width: 80%;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      & + input {
        margin-top: 20px;
      }
    }
  }
`;
