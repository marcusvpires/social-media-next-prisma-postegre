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

// Dropdown

export const ProfileDropdown = styled.div`
  width: 18rem;
  height: 0rem;
  padding: 0;
  position: absolute;
  left: -10rem;
  top: 3rem;
  border-radius: 0 0 0 5px;
  background-color: var(--bg-2);
  overflow: hidden;
  transition: 200ms;
  z-index: 90;
`;
export const ProfileDropName = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;
export const ProfileDropEmail = styled.div`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  text-align: center;
`;
export const ProfileDropLogout = styled.div`
  padding: 0.5rem 0.5rem;
  display: flex;
`;

// Profile

export const Profile = styled.div`
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  &:hover ${ProfileDropdown} {
    padding: 0.5rem;
    padding-top: .5rem;
    height: auto;
  }
`;
export const Photo = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
export const Name = styled.div`
  margin-right: 0.8rem;
`;
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const Loading = styled.div`
  border: 0.2em solid var(--bg-2);
  border-top: 0.2em solid var(--border);
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  animation: ${spin} 0.6s linear infinite;
`;
export const Button = styled.div`
  padding: 0.5rem;
  flex-grow: 1;
  border: 1px solid var(--txt-1);
  text-align: center;
  border-radius: 5px;
`;

// Loguin

export const Loguin = styled.a`
  display: flex;
  width: 8rem;
  text-decoration: none;
  color: var(--txt-1);
`