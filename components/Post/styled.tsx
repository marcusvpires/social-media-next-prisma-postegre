import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--border);
  background-color: var(--bg-1);
  border-radius: 10px;
`;
export const Container = styled.a`
  text-decoration: none;
  color: var(--txt-1);
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  margin-left: 0.5rem;
`;
export const Image = styled.div`
  height: 5.5em;
  width: 5.5rem;
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
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.3rem;
`;
export const Author = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 500;
  color: var(--txt-2);
`;
export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
