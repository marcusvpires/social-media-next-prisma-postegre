import React from "react";
import * as S from "./styled"

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => (
  <S.Wrapper>
    <S.Container>
      <S.Container>id: {post.id}</S.Container>
      <S.Container>title: {post.title}</S.Container>
      <S.Container>author: {post.author.name}</S.Container>
      <S.Container>content: {post.content}</S.Container>
      <S.Container>published: {post.published}</S.Container>
    </S.Container>
  </S.Wrapper>
)

export default Post
