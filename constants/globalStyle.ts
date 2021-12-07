import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6{
    z-index: 1;
  }
`;

export default GlobalStyle;
