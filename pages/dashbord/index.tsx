import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
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

  const { data: session, status } = useSession()

  if (status === "unauthenticated") {
    return <DashbordLayout><NotAuthorized /></DashbordLayout>
  } else {
    console.log(session)
  }
  
  const publish = (id: string) => {
    console.log('ID:', id)
  }

  return (
    <DashbordLayout>
      <S.Feed>
        <S.Content>
          {props.posts.map((post) => (
            <PostADM key={post.id} post={post} publish={publish}/>
          ))}
        </S.Content>
      </S.Feed>
    </DashbordLayout>
  );
};

export default Dashbord;
