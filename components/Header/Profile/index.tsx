import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Profile from './Profile';
import * as S from './styled';

const Session: React.FC = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') return <S.Loading />;
  else {
    if (session) {
      return (
        <S.Profile><Profile user={session.user}/></S.Profile>
      );
    } else {
      return (
        <S.Profile>
          <S.Loguin>
            <S.Button onClick={() => signIn('google')}>Entrar</S.Button>
          </S.Loguin>
        </S.Profile>
      );
    }
  }
};

export default Session;
