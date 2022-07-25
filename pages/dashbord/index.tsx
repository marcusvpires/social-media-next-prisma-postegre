import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import DashbordLayout from '../../components/DashbordLayout';
import Post, { PostProps } from '../../components/Post';
import * as S from '../../styles/pageStyles/dashbord';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { draft: [] } };
  }

  const draft = await prisma.post.findMany({
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
    props: { draft },
  };
};

type Props = {
  draft: PostProps[];
};


const Dashbord: React.FC<Props> = (props) => {
  return (
    <DashbordLayout>
      <S.Feed>
        <S.Content>
          {props.draft.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </S.Content>
      </S.Feed>
    </DashbordLayout>
  );
};

export default Dashbord;