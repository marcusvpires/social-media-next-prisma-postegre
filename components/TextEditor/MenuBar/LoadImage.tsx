import React from 'react';
import imageCompression from 'browser-image-compression';

import { Editor } from '@tiptap/react';
import { Image } from '@styled-icons/boxicons-regular';
import * as S from './styled';

const compress = async (file: File) => {
  console.log(`Original file size: ${file.size / 1024 / 1024} MB`);
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(file, options);
    console.log(
      `Compressed file size: ${compressedFile.size / 1024 / 1024} MB`
    );
    return imageCompression.getDataUrlFromFile(compressedFile);
  } catch (error) {
    console.log(error);
  }
};

type PropsType = {
  editor: Editor;
};

const LoadImage: React.FC<PropsType> = ({ editor }) => {
  const handleFile = async (ev: any) => {
    const file = ev.target.files[0];
    if (!file) return;
    else {
      const base64 = await compress(file);
      editor.chain().focus().setImage({ src: base64 }).run()
    }
  };
  return (
    <S.ImgWrapper htmlFor='file-input'>
      <S.ImgInput
        type='file'
        id='file-input'
        name='file-input'
        muitipart
        onChange={handleFile}
      />
      <Image />
    </S.ImgWrapper>
  );
};

export default LoadImage;
