import { createGlobalStyle } from 'styled-components';

import joyBackground from '../assets/controller.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        background: #EBEBEB url(${joyBackground}) no-repeat 85% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
  }

  button {
      cursor: pointer;
  }

`;
