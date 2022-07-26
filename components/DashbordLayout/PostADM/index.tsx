import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './styled';
import { Edit, Trash, PaperPlane } from '@styled-icons/boxicons-regular';

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
    image: string;
  } | null;
  content: string;
  published: boolean;
};

const PostADM: React.FC<{ post: PostProps, publish?: Function }> = ({ post, publish }) => {
  let content = post.content;
  if (content.length > 250) {
    content = content.slice(0, 250);
  }
  return (
    <S.Wrapper>
      <Link href={`/post/${post.id}`}>
        <S.Container>
          <S.Image>
            <Image alt='Imagem de perfil' src='/defaurprofile.svg' layout='fill' />
          </S.Image>
          <S.Post>
            <S.Title>{post.title}</S.Title>
            <S.Content>{content}</S.Content>
          </S.Post>
        </S.Container>
      </Link>
      <S.Buttons>
        <S.Published
          published={!post.published}
          onClick={
            !post.published ?
            (() => {
              publish(post.id);
            }) :
            (() => {})
          }
        >
          {!post.published && 'Publicar'}
        </S.Published>
        <S.Button icon>
          <Edit />
        </S.Button>
        <S.Button icon color='var(--red-d)'>
          <Trash />
        </S.Button>
      </S.Buttons>
    </S.Wrapper>
  );
};

export default PostADM;
