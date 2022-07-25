import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import { PostProps } from '../../components/Post';
import Markdown from '../../styles/Mardown';
import prisma from '../../lib/prisma';
import * as S from '../../styles/pageStyles/postPage';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post: React.FC<PostProps> = (props) => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Title>{props.title}</S.Title>
        <Markdown>
          <S.Container dangerouslySetInnerHTML={{__html: props.content}} />
        </Markdown>
      </S.Wrapper>
    </Layout>
  );
};

export default Post;
