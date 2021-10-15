import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        background-color: #091f44;
    }
`;

export default GlobalStyle;
