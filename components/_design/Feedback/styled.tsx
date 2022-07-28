import styled from 'styled-components';

export const Overflow = styled.section`
  height: 7rem;
  width: 100vw;
  max-width: ${(props) => (props.display ? '100vw' : '0')};
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 5px;
  overflow: hidden;
  transition: 200ms;
`;

export const Wrapper = styled.section`
  max-width: 100vw;
  position: absolute;
  bottom: 2rem;
  right: ${(props) => (props.display ? '2rem' : '-100vw')};
  height: 4rem;
  border-radius: 5px;
  background-color: var(--${(props) => props.color}-l);
  border: 1px solid var(--${(props) => props.color});
  color: var(--${(props) => props.color}-d);
  user-select: none;
  transition: 200ms;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  padding: 0 1rem;
`;
export const Text = styled.div`
  padding: 1rem;
  padding-right: 4rem;
`;
export const Icon = styled.div`
  height: 2rem;
  width: 2rem;
`;
