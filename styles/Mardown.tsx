import styled from 'styled-components';

const Markdown = styled.div`
  color: var(--txt-1);

  h1 {
    font-size: 1.75rem;
    line-height: calc(1ex / 0.42);
    margin: calc(1ex / 0.42) 0;
    font-weight: 700;
  }

  h2 {
    font-size: 1.5rem;
    line-height: calc(1ex / 0.42);
    margin: calc(1ex / 0.42) 0;
    font-weight: 700;
  }

  h3 {
    font-size: 1.25rem;
    line-height: calc(1ex / 0.38);
    margin: calc(1ex / 0.38) 0;
    font-weight: 700;
  }

  h4 {
    font-size: 1rem;
    line-height: calc(1ex / 0.37);
    margin: calc(1ex / 0.37) 0;
    font-weight: 700;
  }
  h5 {
    font-size: 0.875rem;
    line-height: calc(1ex / 0.37);
    margin: calc(1ex / 0.37) 0;
    font-weight: 700;
  }

  p {
    font-size: 1.125rem;
    line-height: calc(1ex / 0.32);
    margin: calc(1ex / 0.32) 0;
  }

  ul {
    list-style: disc;
    margin-left: 2em;
  }

  ol {
    list-style: number;
    margin-left: 2em;
  }

  li > p {
    margin: 1em 0;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    font-family: monospace;
    background: var(--bg-3);
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
    line-height: calc(1ex / 0.32);
  }

  pre {
    width: 100%;
    padding: 1.5em;
    background: var(--bg-3);
    border-radius: 5px;
  }

  blockquote {
    padding: 0.8em 0 0.8em 1em;
    margin: 2em 0;
    border-left: 8px solid var(--border);
    font-size: 1.2em;
    line-height: calc(1ex / 0.34);
    margin: calc(1ex / 0.34) 0;
  }

  blockquote p {
    margin: 0;
  }

  img {
    height: auto;
    object-fit: contain;
    display: block;
    margin: 1.125rem auto;
    max-width: 100%;
    max-height: calc(50vh + 150px);
  }
`;

export default Markdown;
