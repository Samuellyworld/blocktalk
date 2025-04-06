/* stylelint-disable */
import { createGlobalStyle } from "styled-components";

// styled components global styles
export const GlobalStyle = createGlobalStyle`

@keyframes modalEnter {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes modalExit {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}

 
  :root {
    --block-white :rgba(255, 255, 255, 1);
    --block-primary :rgba(30, 144, 255, 1);
    --block-gray: rgba(206, 207, 210, 1);
    --block-gold: rgba(255, 153, 0, 1);
    --block-black: rgba(8, 12, 22, 1);
    --font-size-xxs: 0.8rem;
    --font-size-xs: 0.875rem;
    --font-size-s: 1rem;
    --font-size-m: 1.125rem;
    --font-size-l: 1.25rem;
    --font-size-xl: 1.563rem;
    --font-size-xxl: 1.875rem;
    --font-size-xxxl: 2.5rem;
  }
 

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  html, 
  body {
    font-family: "Geist Mono", monospace;
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
    overflow-x : hidden;
    background : rgba(8, 12, 22, 1);
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    all: unset;
  }
  input {
    all : unset;
  }
  select {
    outline: none;
    border: none;
  }
  `;