import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */


        /* Colors */
        --navy: #043277;


    }    
    body {
        -ms-overflow-style: none;

    }
     
    ::-webkit-scrollbar {
        display: none;
    }
    button {
        /* background: none; */
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    
    textarea {
        resize: none;
    }
`;
