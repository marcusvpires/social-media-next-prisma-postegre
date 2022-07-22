import React, { useState } from 'react';
import Image from 'next/image';
import updateProfileImage from '../../../db/controller/user/updateProfileImage';
import * as S from './styled';

type Props = {
  displayUpload: boolean;
  prevImage: string;
  email: string;
};

const UploadPhoto: React.FC<Props> = ({ displayUpload, prevImage, email }) => {
  const [preview, setPreview] = useState<string>(prevImage);

  const handleFile = (ev: any) => {
    const file = ev.target.files[0];
    if (!file) return;
    else updateProfileImage(file, email, setPreview)
  };

  return (
    <S.Upload displayUpload={displayUpload}>
      <S.Container>
        <S.Header>Foto de perfil</S.Header>
        <S.Preview>
          <Image alt='Previsualização da imagem' src={preview} layout='fill' />
        </S.Preview>
        <S.ButtonContainer>
          <S.Remove>Remover</S.Remove>
          <S.File htmlFor='profileImageInput'>
            <S.FileInput
              type='file'
              id='profileImageInput'
              name='profileImageInput'
              muitipart
              onChange={handleFile}
            />
            Mudar
          </S.File>
        </S.ButtonContainer>
      </S.Container>
    </S.Upload>
  );
};

export default UploadPhoto;
