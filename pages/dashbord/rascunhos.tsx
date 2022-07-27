import React, { useState } from 'react';
import prisma from '../../lib/prisma';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import DashbordLayout from '../../components/DashbordLayout';
import PostADM from '../../components/DashbordLayout/PostADM';
import NotAuthorized from '../../components/NotAutorized';

import * as S from '../../styles/pageStyles/dashbord';

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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { posts: [] } };
  }

  const result = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false
    },
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
    props: { posts: posts, email: session.user.email },
  };
};
const Dashbord: React.FC<{ posts: IPost[]; email: string }> = (props) => {
  const [posts, setPosts] = useState(props.posts);
  const query = {
    author: { email: props.email, published: false },
  };

  if (!props.email) {
    return (
      <DashbordLayout>
        <NotAuthorized />
      </DashbordLayout>
    );
  }

  return (
    <DashbordLayout>
      <S.Feed>
        <S.Content>
          {posts.map((post) => (
            <PostADM
              key={post.id}
              post={post}
              setPosts={setPosts}
              email={props.email}
              query={JSON.stringify(query)}
            />
          ))}
        </S.Content>
      </S.Feed>
    </DashbordLayout>
  );
};

export default Dashbord;
