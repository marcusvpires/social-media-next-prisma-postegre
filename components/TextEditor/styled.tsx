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
  height: calc(100vh - 6rem - (1ex / 0.42));
  width: 100vw;
  padding: 1rem;
  overflow: auto;
`;
export const TitleContainer = styled.div`
  padding: 0 1rem;
  display: inline-block;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Title = styled.input`
  border: none;
  border-bottom: 2px solid var(--border);
  background-color: var(--bg-2);
  font-size: 2.5em;
  line-height: calc(1ex / 0.42);
  font-weight: bold;
  padding: 1rem;
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
  max-width: 44rem;
`;
export const TextEditor = styled.div`
  max-width: 44rem;
  margin: 0 auto;
  .ProseMirror {
    padding: 1rem;
    min-height: calc(100vh - 8rem);
    outline: none !important;
  }
  .ProseMirror p.is-editor-empty:first-child::before {
    color: var(--txt-3);
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }
`;

// Menubar

export const Menubar = styled.div`
  height: 2rem;
  width: 100vw;
  outline: 1px solid var(--border);
  display: flex;
  justify-content: center;
  background-color: var(--bg-2);
`;
export const Button = styled.button`
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
  position: relative;
  color: var(--txt-2);
  transition: background-color 200ms;
  background-color: ${(props) => props.isActive && 'var(--bg-3)'};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;
export const Select = styled.select`
  padding: 0 0.5rem;
  background-color: var(--bg-2);
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  cursor: pointer;
`;
export const Option = styled.option``;
