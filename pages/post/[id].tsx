import React from 'react';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { PostProps } from '../../components/Post';
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
        <S.Container>
          <ReactMarkdown children={props.content} />
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default Post;
