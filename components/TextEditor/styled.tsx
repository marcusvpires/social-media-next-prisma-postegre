import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Content = styled.div`
`

// Menubar

export const Menubar = styled.div`
  height: 2rem;
  width: 100vw;
  padding: 0 4rem;
  outline: 1px solid var(--border);
  display: flex;
  background-color: var(--bg-2);
`
export const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  padding: .4rem;
  position: relative;
  color: var(--txt-2);
  transition: background-color 200ms;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`
