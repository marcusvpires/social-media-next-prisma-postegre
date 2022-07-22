import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Container = styled.div`
  height: inherit;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TextEditor = styled.div`
  height: calc(100vh - 5rem);
  overflow: auto;
`

// Menu

export const Menu = styled.div`
    display: flex;
    height: 27rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 0.5rem;
`

export const Button = styled.div`
  padding: .2rem;
  font-size: 1rem;
  background-color: ${props => props.active && 'var(--bg-3)'};
  cursor: pointer;
`

export const Icon = styled.div`
  height: 1rem;
  width: 1rem;
`
