import React from 'react';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import * as S from '../styles/pageStyles/feed';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const FeedPage: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      <S.Feed>
        <S.Content>
          {props.feed.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </S.Content>
      </S.Feed>
    </Layout>
  );
};

export default FeedPage;
