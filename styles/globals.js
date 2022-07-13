import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--bg-2);
    line-height: 1;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: var(--txt-1);
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  div, button, ul, li, section, input {
    box-sizing: border-box;
  }

  body {
    --bg-1: #ffffff;
    --bg-2: #efefef;
    --bg-3: #ced4da;
    --txt-1: #212529;
    --txt-2: #6c757d;
    --txt-o: #ffffff;
    --txt-3: #9c9fa6;
    --border: #ced4da;
    --primary-l: #53a3f9;
    --primary: #007bff;
    --red-l: #f8d7da;
    --red: #dc3545;
    --red-d: #721c24;
    --yellow-l: #fff3cd;
    --yellow: #e0a800;
    --yellow-d: #856404;
    --green-l: #d4edda;
    --green: #218838;
    --green-d: #155724;
    --blue-l: #cce5ff;
    --blue: #0069d9;
    --blue-d: #004085;
    --gray: #5a6268;
  }
`;
export default GlobalStyles;
