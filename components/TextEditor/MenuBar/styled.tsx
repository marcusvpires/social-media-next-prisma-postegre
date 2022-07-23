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

// Heading

export const Heading = styled.div`
  height: 2rem;
  width: 10rem;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid var(--border);
  box-sizing: border-box;
  border-width: 0 1px 0 1px;
`;
export const Select = styled.div`
  height: 2rem;
  width: 10rem;
  padding: 0 1rem;
  position: relative;
  line-height: 2rem;
  cursor: pointer;
`;
export const SelectIcon = styled.div`
  height: 2rem;
  width: 1rem;
  position: absolute;
  right: .5rem;
  top: 0;
  color: var(--txt-2);
  transform: ${props => props.display ? 'rotate(180deg)' : '0'};
  transition: 200ms;
`;
export const Dropdown = styled.div`
  width: 10rem;
  height: ${props => props.display ? '12rem' : '0'};
  position: absolute;
  top: 2rem;
  left: -1px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg-2);
  border: ${props => props.display ? '1px solid var(--border)' : 'none'};
  z-index: 1000;
  transition: height 150ms;
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
