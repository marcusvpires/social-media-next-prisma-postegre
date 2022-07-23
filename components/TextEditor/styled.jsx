import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const Content = styled.div`
  height: calc(100vh - 6rem);
  width: 100vw;
  padding: 2rem;
  overflow: auto;
`;
export const TextEditor = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  .ProseMirror {
    outline: none !important;
  }
`;

// Menubar

export const Menubar = styled.div`
  height: 2rem;
  width: 100vw;
  padding: 0 4rem;
  outline: 1px solid var(--border);
  display: flex;
  background-color: var(--bg-2);
`;
export const Button = styled.button`
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
  position: relative;
  color: var(--txt-2);
  transition: background-color 200ms;
  background-color: ${props => props.isActive && 'var(--bg-3)'};
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;
