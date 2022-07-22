import React from 'react';
import Menubar from './Menubar';
import * as S from './styled';

const TextEditor: React.FC = () => {
  return (
  <S.Wrapper>
    <Menubar />
    <S.Content>TextEditor</S.Content>
  </S.Wrapper>
)}

export default TextEditor;
