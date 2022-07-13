import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.section`
  width: 100vw;
  height: 4rem;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px var(--border);
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

// Profile

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  `
export const Photo = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
export const Name = styled.div`
  margin-right: .8rem;
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Loading = styled.div`
  border: 0.2em solid var(--bg-2);
  border-top: 0.2em solid var(--border);
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  animation: ${spin} 0.6s linear infinite;
`
