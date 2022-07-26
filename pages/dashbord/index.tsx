import React, { useState } from 'react';
import prisma from '../../lib/prisma';

import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';

import DashbordLayout from '../../components/DashbordLayout';
import PostADM from '../../components/DashbordLayout/PostADM';
import NotAuthorized from '../../components/NotAutorized';
import { PostProps } from '../../components/Post';

import * as S from '../../styles/pageStyles/dashbord';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { posts: [] } };
  }

  const posts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
    },
    select: {
      id: true,
      title: true,
      preview: true,
      published: true,
      updatedAt: true,
      author: {
        select: {
          image: true,
        },
      },
    },
    orderBy: [
      {
        updatedAt: 'desc'
      }
    ]
  });
  const result = posts.map((post) => {
    const updatedAt = post.updatedAt.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return {
      id: post.id,
      title: post.title,
      preview: post.preview,
      published: post.published,
      updatedAt: updatedAt,
      author: {
        image: post.author.image,
      },
    };
  });
  return {
    props: { posts: result, email: session.user.email },
  };
};

type Props = {
  posts: PostProps[];
  email: string;
};

const updatePost = (post: object, ID: string, cb: Function) => {
  fetch(`/api/post/${ID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('RES:', res);
      cb(res?.ok);
    });
};

const refreshList = (email: string, cb: Function) => {
  fetch(`/api/post`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'email': email },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('RES:', res);
      cb(res?.posts);
    });
};

const deletePost = (ID: string, cb: Function) => {
  fetch(`/api/post/${ID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('RES:', res);
      cb(res?.posts);
    });
};

const Dashbord: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState(props.posts);

  if (!props.email) {
    return (
      <DashbordLayout>
        <NotAuthorized />
      </DashbordLayout>
    );
  }

  const publish = (id: string) => {
    console.log('ID:', id);
    updatePost({ published: true }, id, (ok: boolean) => {
      if (ok) {
        refreshList(props.email, (posts: PostProps[]) => {
          setPosts(posts);
        });
      }
    });
  };

  const excluir = (id: string) => {
    console.log('ID:', id);
    deletePost(id, (ok: boolean) => {
      if (ok) {
        refreshList(props.email, (posts: PostProps[]) => {
          setPosts(posts);
        });
      }
    });
  };

  return (
    <DashbordLayout>
      <S.Feed>
        <S.Content>
          {posts.map((post) => (
            <PostADM key={post.id} post={post} publish={publish} excluir={excluir}/>
          ))}
        </S.Content>
      </S.Feed>
    </DashbordLayout>
  );
};

export default Dashbord;
