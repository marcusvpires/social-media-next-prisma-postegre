import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  scrollbar-width: thin;
`;

export const Container = styled.div`
  max-width: 50rem;
`

export const Content = styled.div`
  h1 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 5px;
      letter-spacing: .05em
  }

  p {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased !important;
    -moz-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility !important;
    letter-spacing: .03em;
  }
`
