import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    /* font-size: 62.5%; */
  }

  body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  a {
      text-decoration: none;
  }

  .flex {
      display: flex;
  }

  .center {
      justify-content: center;
      align-items: center;
  }

  .space-between {
      justify-content: space-between;
  }

`;

export default GlobalStyle;
