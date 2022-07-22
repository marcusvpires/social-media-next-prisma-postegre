import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './styled';

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

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  let content = post.content
  if (content.length > 250) {
    content = content.slice(0, 250)
  }
  return (
  <S.Wrapper>
    <Link href={`/post/${post.id}`} passHref >
      <S.Container>
        <S.Image>
          <Image alt='Imagem de perfil' src="/defaurprofile.svg" layout='fill' />
        </S.Image>
        <S.Post>
          <S.Title>{post.title}</S.Title>
          <S.Author>{post.author.name}</S.Author>
          <S.Content>{content}</S.Content>
        </S.Post>
      </S.Container>
    </Link>
  </S.Wrapper>
)}

export default Post;
