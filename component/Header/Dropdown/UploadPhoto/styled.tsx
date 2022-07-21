import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: -5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000004f;
  z-index: 100;
`;

export const Container = styled.div`
  padding: 1rem;
  width: 22rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px var(--border);
  background-color: var(--bg-2);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 1rem 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Image = styled.div`
  height: 10rem;
  width: 10rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  margin: 1.5rem 0 0.5rem;
  display: flex;
`;

export const Button = styled.div`
  width: 8rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  flex-grow: 1;
  border: 1px solid var(--txt-1);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const File = styled.label`
  width: 8rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  flex-grow: 1;
  border-radius: 5px;
  background-color: var(--blue);
  border: 1px solid var(--blue-d);
  color: var(--txt-o);
  text-align: center;
  flex-grow: 1;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;
