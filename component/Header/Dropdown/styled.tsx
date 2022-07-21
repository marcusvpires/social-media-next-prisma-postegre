import styled from 'styled-components';

// Dropdown

export const Wrapper = styled.div`
  max-height: ${(props: { drop: Boolean }) => (props.drop ? 'calc(100vh - 5rem)' : '0rem')};
  width: 22rem;
  padding: ${(props: { drop: Boolean }) => (props.drop ? ' 1.5rem' : '0rem')} 1rem;
  position: absolute;
  right: -1.5rem;
  top: 5rem;
  border-radius: 5px;
  box-shadow: ${(props: { drop: Boolean }) => (props.drop ? '1px 1px 5px var(--border)' : 'none')};
  background-color: var(--bg-2);
  transition: max-height 400ms;
  transition: padding 100ms;
  z-index: 90;
`;

export const Photo = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 0.5rem;
  position: relative;
`;
export const Image = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const ChangePhoto = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 2.4rem;
  left: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border);
  box-shadow: 1px 1px 5px var(--border);
  background-color: var(--bg-2);
  border-radius: 50%;
  overflow: hidden;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    color: var(--primary);
  }
`;
export const ChangePhotoContainer = styled.div`
  width: 1rem;
  height: 1rem;
`;

export const Name = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;
export const Email = styled.div`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  text-align: center;
`;
export const Logout = styled.div`
  padding: 1rem 0.5rem 0.5rem;
  margin: 0 1rem;
  display: flex;
`;
export const Button = styled.div`
  padding: 0.5rem;
  flex-grow: 1;
  border: 1px solid var(--txt-1);
  text-align: center;
  border-radius: 5px;
`;