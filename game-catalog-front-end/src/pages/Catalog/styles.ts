import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 60px;
`;

export const Logo = styled.div`
  display: flex;

  h2 {
    margin: 10px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 30px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 90px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    border: 2px solid #fff;
    ${(props) =>
      props.hasError &&
      css`
        border-color: #f44336;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 90px;
    height: 92px;
    background: #07bc0c;
    border: 0;
    border-radius: 5px;
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
    transition: 0.2s background-color;
    &:hover {
      background: ${shade(0.2, '#3EB64A')};
    }
  }
`;

export const Loading = styled.div`
  max-width: 700px;
`;

export const Error = styled.span`
  display: block;
  color: #f44336;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 30px;
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
