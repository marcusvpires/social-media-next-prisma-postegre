import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--border);
  background-color: var(--bg-1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.a`
  text-decoration: none;
  color: var(--txt-1);
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  margin-left: 0.5rem;
  width: -webkit-fill-available;
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
  margin: 0.5rem;
`;
export const Edit = styled.a`
  text-decoration: none;
  width: 2.2rem;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 5px;
  color: var(--txt-1);
  cursor: pointer;
`;
export const Trash = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 5px;
  color: var(--red-d);
  cursor: pointer;
`;
export const Published = styled.button`
  padding: 0.5rem;
  margin: 0.2rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  background-color: ${(props: { published?: string }) =>
    props.published ? 'var(--blue-l)' : 'transparent'};
  color: var(--blue-d);
  display: flex;
  align-items: center;
  border: ${(props: { published?: string }) =>
    props.published ? '1px solid var(--blue)' : 'none'};
  cursor: pointer;
`;
export const PublishedIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  color: var(--blue-d);
`;
export const PublishedText = styled.div`
  margin: 0 0.2rem 0 0.4rem;
  color: var(--blue-d);
`;
