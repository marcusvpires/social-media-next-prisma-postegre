import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import DashbordLayout from '../../components/DashbordLayout';
import PostADM from '../../components/DashbordLayout/PostADM';
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
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { posts },
  };
};

type Props = {
  posts: PostProps[];
};

const Dashbord: React.FC<Props> = (props) => {
  console.log(props.posts);
  return (
    <DashbordLayout>
      <S.Feed>
        <S.Content>
          {props.posts.map((post) => (
            <PostADM key={post.id} post={post} />
          ))}
        </S.Content>
      </S.Feed>
    </DashbordLayout>
  );
};

export default Dashbord;
