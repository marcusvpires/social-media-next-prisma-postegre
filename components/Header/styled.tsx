import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 4rem;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px var(--border);
  z-index: 100;
`;

// Logo

export const Logo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LogoIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  color: var(--primary);
`;
export const LogoLabel = styled.div`
  padding-left: 0.5rem;
  font-size: large;
  font-weight: bold;
  color: var(--txt-2);
`;

// Links

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