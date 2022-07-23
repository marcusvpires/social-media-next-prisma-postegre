import styled from 'styled-components';

export const MenuBar = styled.div`
  height: 2rem;
  width: 100vw;
  outline: 1px solid var(--border);
  display: flex;
  justify-content: center;
  background-color: var(--bg-2);
  user-select: none;
`;
export const Button = styled.button`
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
  position: relative;
  color: var(--txt-2);
  transition: background-color 200ms;
  background-color: ${(props: { isActive: boolean }) => props.isActive ? 'var(--bg-3)' : 'none'};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;
export const ButtonGroup = styled.div`
  padding: 0 0.5rem;
`;
export const Heading = styled.div`
  height: 2rem;
  width: 10rem;
  display: flex;
  align-items: center;
  position: relative;
  `;
export const Select = styled.div`
  height: 2rem;
  width: 10rem;
  padding: 0 1rem;
  line-height: 2rem;
  cursor: pointer;
`;
export const Dropdown = styled.div`
  width: 10rem;
  height: ${props => props.display ? '12rem' : '0'};
  position: absolute;
  top: 2rem;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg-2);
  border: ${props => props.display ? '1px solid var(--border)' : 'none'};
  z-index: 1000;
  transition: height 200ms;
  overflow: hidden;
`;
export const Option = styled.div`
  padding: .8rem 1rem;
  transform: background-color 200ms;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;
