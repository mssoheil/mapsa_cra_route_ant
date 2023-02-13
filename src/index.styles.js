import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.bodyColor};
        color: ${(props) => props.theme.bodyText};
    }
`;
