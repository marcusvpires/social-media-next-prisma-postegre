import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Feedback, useFeedback } from '../../_design/Feedback';
import Loading from '../../_design/Loading';
import { IPost } from '../../../pages/dashbord';

import * as S from './styled';
import { Edit, PaperPlane, Trash } from '@styled-icons/boxicons-regular';
interface PropsType {
  post: IPost;
  email: string;
  setPosts: Function;
  query: string;
}

const PostADM: React.FC<PropsType> = ({ post, email, setPosts, query }) => {
  const [feedback, setFeedback] = useFeedback();
  const [isLoading, setLoading] = useState('');

  const publish = (ID: string, query: string, callback: Function) => {
    setLoading('publicar');
    const post = { published: true };
    fetch(`/api/post/${ID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          refresh(query, callback);
        } else {
          setFeedback('Houve um erro ao publicar', 'error');
          setLoading('');
        }
      })
      .catch((error) => {
        console.error(error);
        setFeedback('Houve um erro ao publicar', 'error');
        setLoading('');
      });
  };

  const refresh = (query: string, callback: Function) => {
    fetch(`/api/post`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'query': query },
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res.posts);
        setLoading('');
      });
  };

  const deletePost = (ID: string, query: string, callback: Function) => {
    setLoading('trash');
    fetch(`/api/post/${ID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'email': query },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.ok) {
          refresh(query, callback);
        } else {
          setFeedback('Houve um erro ao deletar', 'error');
          setLoading('');
        }
      })
      .catch((error) => {
        console.error(error);
        setFeedback('Houve um erro ao deletar', 'error');
        setLoading('');
      });
  };

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
          disabled={isLoading}
          onClick={
            !post.published ? () => publish(post.id, query, setPosts) : () => {}
          }
        >
          <S.PublishedIcon>
            {!post.published && <>{isLoading ? <Loading /> : <PaperPlane />}</>}
          </S.PublishedIcon>
          <S.PublishedText>{!post.published && 'Publicar'}</S.PublishedText>
        </S.Published>
        <Link href={`/editar/${post.id}`} passHref>
          <S.Edit>
            <Edit />
          </S.Edit>
        </Link>
        <S.Trash onClick={() => deletePost(post.id, query, setPosts)}>
          {isLoading === 'trash' ? <Loading /> : <Trash />}
        </S.Trash>
      </S.Buttons>
      <Feedback feedback={feedback} />
    </S.Wrapper>
  );
};

export default PostADM;
