import React, { InputHTMLAttributes } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Markdown from '../../styles/Mardown';
import MenuBar from './MenuBar/index';
import { Teste } from './initialContent';
import Options from './Options';
import * as S from './styled';

export default () => {
  const [title, setTitle] = React.useState('');
  const editor = useEditor({
    extensions: Options,
    content: Teste,
  });
  const handleTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setTitle(value);
  };
  return (
    <S.Wrapper>
      <Markdown>
        <MenuBar editor={editor} title={title} />
        <S.Content>
          <S.TitleContainer>
            <S.Title value={title} onChange={handleTitle} placeholder='Título' />
          </S.TitleContainer>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
    </S.Wrapper>
  );
};
