import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  scrollbar-width: thin;
`;

export const Container = styled.div`
  max-width: 44rem;
  padding: 1rem;
`;

export const Title = styled.div`
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
  color: var(--txt-1);
`;
