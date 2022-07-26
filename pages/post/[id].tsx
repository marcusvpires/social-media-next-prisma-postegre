import React from 'react';
import prisma from '../../lib/prisma';

import { GetServerSideProps } from 'next';
import { PostProps } from '../../components/Post';

import Layout from '../../components/Layout';
import Markdown from '../../styles/Mardown';

import * as S from '../../styles/pageStyles/postPage';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const result = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      updatedAt: true,
      author: {
        select: {
          image: true,
        },
      },
    },
  });
  const updatedAt = result.updatedAt.toLocaleDateString('pt-br', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const post = {
    id: result.id,
    title: result.title,
    content: result.content,
    published: result.published,
    updatedAt: updatedAt,
    author: {
      image: result.author.image,
    },
  };
  return {
    props: post,
  };
};

const Post: React.FC<PostProps> = (props) => {
  console.log(props)
  return (
    <Layout>
      <S.Wrapper>
        <S.Title>{props.title}</S.Title>
        <Markdown>
          <S.Container dangerouslySetInnerHTML={{ __html: props.content }} />
        </Markdown>
      </S.Wrapper>
    </Layout>
  );
};

export default Post;
