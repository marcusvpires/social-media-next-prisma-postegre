import React from 'react';
import imageCompression from 'browser-image-compression';
import { Feedback, useFeedback } from '../../_design/Feedback';
import { Editor } from '@tiptap/react';
import { Image } from '@styled-icons/boxicons-regular';
import * as S from './styled';

const compress = async (file: File, setFeedback: Function) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(file, options);
    return imageCompression.getDataUrlFromFile(compressedFile);
  } catch (error) {
    setFeedback('Erro ao carregar a imagem', 'error')
  }
};

type PropsType = {
  editor: Editor;
};

const LoadImage: React.FC<PropsType> = ({ editor }) => {
  const [ feedback, setFeedback ] = useFeedback()
  const handleFile = async (ev: any) => {
    const file = ev.target.files[0];
    if (!file) return;
    else {
      const base64 = await compress(file, setFeedback);
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
      <Feedback feedback={feedback} />
    </S.ImgWrapper>
  );
};

export default LoadImage;
