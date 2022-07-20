import React from 'react';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Layout from '../component/Layout';
import Post, { PostProps } from '../component/Post';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
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
  return <Layout>
    { props.feed.map(post => <Post post={post} />) }
  </Layout>;
};

export default FeedPage;
