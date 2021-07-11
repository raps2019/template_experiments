import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
}
`

export const GlobalContainer = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding: 0 50px;

@media screen and (max-width: 991px) {
    padding: 0 30px;
}
`

export default GlobalStyle;