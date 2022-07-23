import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Markdown from '../../styles/Mardown';
import MenuBar from './MenuBar/index';
import { Teste } from './initialContent';
import Options from './Options';
import * as S from './styled';

export default () => {
  const editor = useEditor({
    extensions: Options,
    content: Teste,
  });

  return (
    <S.Wrapper>
      <Markdown>
        <MenuBar editor={editor} />
        <S.Content>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
    </S.Wrapper>
  );
};
