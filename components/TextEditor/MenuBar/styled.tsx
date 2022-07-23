import styled from 'styled-components';

export const MenuBar = styled.div`
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
export const ButtonGroup = styled.div`
  padding: 0 0.5rem;
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
