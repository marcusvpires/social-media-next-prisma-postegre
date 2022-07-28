import styled from 'styled-components';

export const MenuBar = styled.div`
  width: 100vw;
  overflow-x: auto;
  outline: 2px solid var(--border);
  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-2);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
  }
`;
export const Tools = styled.div`
  height: 2rem;
  min-width: 59rem;
  display: flex;
  justify-content: center;
  background-color: var(--bg-2);
  user-select: none;
`;
export const Button = styled.button`
  height: 2rem;
  color: ${(props) => (props.color ? props.color : 'var(--txt-2)')};
  transition: background-color 200ms;
  background-color: ${(props) => props.bg};
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;
export const ButtonIcon = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
  position: relative;
  color: inherit;
`;
export const ButtonText = styled.div`
  padding: 0.4rem;
  padding-right: 0.8rem;
  color: inherit;
`;
export const ButtonGroup = styled.div`
  display: flex;
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
  right: 0.5rem;
  top: 0;
  color: var(--txt-2);
  transform: ${(props) => (props.display ? 'rotate(180deg)' : '0')};
  transition: 200ms;
`;
export const Dropdown = styled.div`
  width: 10rem;
  height: ${(props) => (props.display ? '12rem' : '0')};
  position: absolute;
  top: 2rem;
  left: -1px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg-2);
  border: ${(props) => (props.display ? '1px solid var(--border)' : 'none')};
  z-index: 1000;
  transition: height 150ms;
  overflow: hidden;
`;
export const Option = styled.div`
  padding: 0.8rem 1rem;
  transform: background-color 200ms;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-3);
  }
`;

// Load Image

export const ImgWrapper = styled.label`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const ImgInput = styled.input`
  display: none;
`;
