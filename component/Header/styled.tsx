import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px var(--border);
`;
export const LinksList = styled.ul`
  display: flex;
  align-items: center;
`;
export const LinkContainer = styled.li`
  text-decoration: none;
  padding: 0 2rem;
`;
export const Link = styled.a`
  text-decoration: none;
  color: var(--txt-1);
`;
