import React from 'react';
import Layout from '../components/Layout';
import * as S from '../styles/pageStyles/404';

const NotFoundPage: React.FC = () => (
  <Layout>
    <S.Glitch>
      <S.Text>404</S.Text>
    </S.Glitch>
  </Layout>
);

export default NotFoundPage;
