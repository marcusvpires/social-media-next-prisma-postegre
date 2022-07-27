import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  width: 12rem;
  padding: 1rem;
  border: 1px solid var(--border);
  background-color: var(--bg-1);
`;
export const Item = styled.div`
  padding: .8rem;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: var(--holver);
  }
`;
