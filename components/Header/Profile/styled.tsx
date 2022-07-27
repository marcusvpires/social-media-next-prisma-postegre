import styled, { keyframes } from 'styled-components';

export const Profile = styled.div`
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Photo = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
  user-select: none;
  cursor: pointer;
`;

// Dropdown

type propsDisplay = {
  display: boolean
}

export const Dropdown = styled.div`
  max-height: ${(props: propsDisplay) => (props.display ? 'calc(100vh - 5rem)' : '0rem')};
  width: 20rem;
  padding: ${(props: propsDisplay) => (props.display ? ' 1.2rem 1rem' : '0rem')} 1rem;
  position: absolute;
  overflow: hidden;
  right: -1rem;
  top: 4rem;
  border-radius: 5px;
  box-shadow: ${(props: propsDisplay) => (props.display ? '1px 1px 5px var(--border)' : 'none')};
  border: ${(props: propsDisplay) => (props.display ? '1px solid var(--border)' : 'none')};
  background-color: var(--bg-1);
  transition: max-height 400ms;
  transition: padding 100ms;
  z-index: 90;
`;
export const Link = styled.a`
  text-decoration: none;
  padding: .8rem;
  display: block;
  transition: 200ms;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--holver);
  }
`;
export const Name = styled.div`
  padding: 0;
`;
export const Email = styled.div`
  padding-top: .5rem;
  font-size: 0.8rem;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  display: inline-block;
  background-color: var(--border);
`;
export const LogoutButton = styled.div`
  padding: 0.5rem;
  margin: 1rem;
`;
