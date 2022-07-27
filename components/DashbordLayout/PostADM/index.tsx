import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '../../../pages/dashbord';

import * as S from './styled';
import { Edit, Trash } from '@styled-icons/boxicons-regular';

const publish = (ID: string, email: string, query: string, callback: Function) => {
  const post = { published: true };
  fetch(`/api/post/${ID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        refresh(email, query, callback);
      }
    });
};

const refresh = (email: string, query: string, callback: Function) => {
  fetch(`/api/post`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'query': email },
  })
    .then((res) => res.json())
    .then((res) => callback(res.posts));
};

const deletePost = (ID: string, email: string, query: string, callback: Function) => {
  fetch(`/api/post/${ID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'email': email },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        refresh(email, query, callback);
      }
    });
};

interface PropsType {
  post: IPost;
  email: string;
  setPosts: Function;
  query: string;
}

const PostADM: React.FC<PropsType> = ({ post, email, setPosts, query }) => {
  return (
    <S.Wrapper>
      <Link href={`/post/${post.id}`}>
        <S.Container>
          <S.Image>
            <Image
              alt='Imagem de perfil'
              src='/defaurprofile.svg'
              layout='fill'
            />
          </S.Image>
          <S.Post>
            <S.Title>{post.title}</S.Title>
            <S.Content>{post.updatedAt}</S.Content>
          </S.Post>
        </S.Container>
      </Link>
      <S.Buttons>
        <S.Published
          published={!post.published}
          onClick={
            !post.published
              ? () => publish(post.id, email, query, setPosts)
              : () => {}
          }
        >
          {!post.published && 'Publicar'}
        </S.Published>
        <Link href={`/editar/${post.id}`} passHref>
          <S.Edit>
            <Edit />
          </S.Edit>
        </Link>
        <S.Trash onClick={() => deletePost(post.id, email, query, setPosts)}>
          <Trash />
        </S.Trash>
      </S.Buttons>
    </S.Wrapper>
  );
};


export default PostADM;
