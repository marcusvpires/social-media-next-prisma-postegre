import React from 'react';
import prisma from '../../lib/prisma';

import { GetServerSideProps } from 'next';
import { PostProps } from '../../components/TextEditor';

import Layout from '../../components/Layout';
import TextEditor from '../../components/TextEditor';

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

const Edit: React.FC<PostProps> = (props) => {
  return (
    <Layout>
      <TextEditor post={props}/>
    </Layout>
  );
};

export default Edit;
