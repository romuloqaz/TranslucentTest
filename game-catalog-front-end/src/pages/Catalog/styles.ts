import { shade } from 'polished';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #2c3a33;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Logo = styled.div`
  display: flex;

  h2 {
    color: #2c3a33;
    margin-top: 10px;
    margin-left: 5px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 80px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #2c3a33;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 90px;
    height: 90px;
    background: #3eb64a;
    border: 0;
    border-radius: 50%;
    margin-left: 3%;
    color: #fff;
    font-weight: bold;
    transition: 0.2s background-color;
    &:hover {
      background: ${shade(0.2, '#3EB64A')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  div {
    background: #fff;
    border-radius: 5px;
    max-width: 700px;
    padding: 10px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + div {
      margin-top: 16px;
    }

    section {
      margin: 0 16px;
      flex: 1;
    }

    strong {
      font-size: 24px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
