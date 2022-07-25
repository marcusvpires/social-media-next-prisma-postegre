import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--border);
  background-color: var(--bg-1);
  border-radius: 5px;
  display: flex;
`;
export const Container = styled.a`
  text-decoration: none;
  color: var(--txt-1);
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  margin-left: 0.5rem;
  cursor: pointer;
`;
export const Image = styled.div`
  height: 3em;
  width: 3rem;
  position: relative;
  background-color: white;
  flex-shrink: 0;
`;
export const Post = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
`;
export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  padding-bottom: 0.3rem;
`;
export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Buttons = styled.div`
  display: flex;
  height: auto;
  align-items: center;

`;
export const Button = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  margin: 0.5rem;
  color: ${(props: { color?: string }) => (props.color ? props.color : 'var(--txt-1)')};
  cursor: pointer;
`;
