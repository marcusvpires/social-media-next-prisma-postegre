import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import UploadPhoto from './UploadPhoto';

import * as S from './styled';
import { Camera } from '@styled-icons/boxicons-regular';

type Props = {
  drop: boolean;
  user: {
    name?: string;
    email?: string;
    image?: string;
  }
};

const Dropdown: React.FC<Props> = ({ drop, user }) => {
  const [ displayUpload, setDisplayUpload ] = useState(false)
  const handleDisplayUpload = () => setDisplayUpload(!displayUpload)
  return (
    <S.Wrapper drop={drop}>
      <S.Photo drop={true}>
        <S.Image>
          {user.image && <Image alt='The guitarist in the concert.' src={user.image} layout='fill' />}
        </S.Image>
        <S.ChangePhoto onClick={handleDisplayUpload}>
          <S.ChangePhotoContainer>
            <Camera />
          </S.ChangePhotoContainer>
        </S.ChangePhoto>
      </S.Photo>
      <S.Name>{user.name}</S.Name>
      <S.Email>{user.email}</S.Email>
      <S.Logout>
        <S.Button onClick={() => signOut()}>Sair</S.Button>
      </S.Logout>
      <UploadPhoto displayUpload={displayUpload} prevImage={{ src: user.image, email: user.email }} />
    </S.Wrapper>
)}

export default Dropdown;
