import React, { useState } from 'react';
import { signOut, signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
// import Link from 'next/link';
import * as S from './styled';

import { Camera } from '@styled-icons/boxicons-regular';

const Profile: React.FC = () => {
  const [drop, setDrop] = useState(false);
  const handleDrop = () => setDrop(!drop);
  const { data: session, status } = useSession();
  if (status === 'loading') return <S.Loading />;
  else {
    if (session) {
      return (
        <S.Profile>
          <S.Photo onClick={handleDrop}>
            <Image alt='The guitarist in the concert.' src={session.user.image} layout='fill' />
          </S.Photo>
          <S.ProfileDropdown drop={drop}>
            <S.ProfileDropPhoto drop={true}>
              <S.ProfileDropImage>
                <Image alt='The guitarist in the concert.' src={session.user.image} layout='fill' />
              </S.ProfileDropImage>
              <S.ProfileDropPhotoButton>
                <S.ProfileDropPhotoButtonContainer>
                  <Camera />
                </S.ProfileDropPhotoButtonContainer>
              </S.ProfileDropPhotoButton>
            </S.ProfileDropPhoto>
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
