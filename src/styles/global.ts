import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Nunito, sans-serif;
        line-height: 160%;

    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
    }
`
