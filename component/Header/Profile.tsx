import React, { ReactNode } from 'react';
import { signOut, signIn, useSession } from 'next-auth/react';

import Link from 'next/link';
import * as S from './styled';

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  console.log(session, status);
  if (status === 'loading') return <S.Loading />;
  else {
    if (session) {
      return (
        <S.Profile>
          <S.Name>{session.user.name.split(' ')[0]}</S.Name>
          <S.Photo src={session.user.image} alt={session.user.name} />
          <S.ProfileDropdown>
            <S.ProfileDropName>{session.user.name}</S.ProfileDropName>
            <S.ProfileDropEmail>{session.user.email}</S.ProfileDropEmail>
            <S.ProfileDropLogout>
              <S.Button onClick={() => signOut()}>Sair</S.Button>
            </S.ProfileDropLogout>
          </S.ProfileDropdown>
        </S.Profile>
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

export default Profile;
