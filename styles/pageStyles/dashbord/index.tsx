import styled from 'styled-components';

export const Feed = styled.section`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  scrollbar-width: thin;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 50rem;
  width: -webkit-fill-available;
`;

export const Container = styled.div`
  max-width: 55rem;
`;
export const Header = styled.div`
  display: flex;
`;
export const Cell = styled.div``;

export const Empty = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ETitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--blue);
  text-align: center;
  margin: 0.5rem;
`;
export const EDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--txt-2);
  max-width: 15rem;
  text-align: center;
  margin: 1rem 0;
`;
export const ELink = styled.a`
  margin: .5rem 0;
  width: 10rem;
  text-decoration: none;
  color: var(--txt-1);
  user-select: none;
  padding: 0.5rem;
  border: 1px solid var(--txt-1);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;
