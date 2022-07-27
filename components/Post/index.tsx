import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '../../pages/index';
import * as S from './styled';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <S.Wrapper>
      <Link href={`/post/${post.id}`} passHref>
        <S.Container>
          <S.Image>
            <Image
              alt='Imagem de perfil'
              src={
                post?.author?.image ? post.author.image : '/defaurprofile.svg'
              }
              layout='fill'
            />
          </S.Image>
          <S.Post>
            <S.Title>{post.title}</S.Title>
            <S.Author>{post.author.name}</S.Author>
            <S.Content>{post.preview}</S.Content>
          </S.Post>
        </S.Container>
      </Link>
    </S.Wrapper>
  );
};

export default Post;
