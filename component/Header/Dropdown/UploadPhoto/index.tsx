import React, { useState } from 'react';
import Image from 'next/image';
import compressImage from '../../../../db/middlewares/compressImage';
import updateProfileImage from '../../../../db/controller/user/updateProfileImage';
import * as S from './styled';

// x = 1000 / size

export interface IImage {
  src: string;
  email: string;
  size?: number;
}

type Props = {
  displayUpload: boolean;
  prevImage?: IImage;
};

const UploadPhoto: React.FC<Props> = ({ displayUpload, prevImage }) => {
  const [image, setImage] = useState<IImage>(prevImage);

  const handleFile = (ev: any) => {
    const file = ev.target.files[0];
    if (!file) return;
    compressImage(
      file,
      async (base64: string) => {
        const size = (base64.length * (3/4)) - 1
        const newImage = { src: base64, email: prevImage.email, size }

        console.log("Complete compress - Image (", file.size / 1000, "KB ) -", file)
        setImage(newImage);
        // const result = await updateProfileImage(image.src, email)
      },
      { maxHeight: 200, maxWidth: 200 }
    );
  };

  return (
    <S.Wrapper displayUpload={displayUpload}>
      <S.Container>
        <S.Header>Foto de perfil</S.Header>
        <S.Image>
          <Image alt='Previsualização da imagem' src={image.src} layout='fill' />
        </S.Image>
        <S.ButtonContainer>
          <S.Button>Remover</S.Button>
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
    </S.Wrapper>
  );
};

export default UploadPhoto;
