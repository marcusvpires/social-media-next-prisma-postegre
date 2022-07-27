import React from 'react';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import Post from '../components/Post';
import * as S from '../styles/pageStyles/feed';

export interface IPost {
  id: string;
  title: string;
  preview: string;
  published: boolean;
  updatedAt: string;
  createdAt: string;
  author: {
    name?: string;
    email: string;
    image: string;
  };
}

export const getServerSideProps: GetStaticProps = async () => {
  const result = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      preview: true,
      published: true,
      updatedAt: true,
      createdAt: true,
      author: {
        select: {
          email: true,
          image: true,
        },
      },
    },
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  });

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const posts = result.map((post) => {
    const updatedAt = formatDate(post.updatedAt);
    const createdAt = formatDate(post.createdAt);
    delete post.updatedAt;
    delete post.createdAt;
    return { ...post, createdAt, updatedAt };
  });
  return {
    props: { posts: posts },
  };
};

const FeedPage: React.FC<{ posts: IPost[] }> = (props) => {
  return (
    <Layout>
      <S.Feed>
        <S.Content>
          {props.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </S.Content>
      </S.Feed>
    </Layout>
  );
};

export default FeedPage;
