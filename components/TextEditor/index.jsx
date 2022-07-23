import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Markdown from '../../styles/Mardown';
import Menubar from './Menubar';
import * as S from './styled';

export default () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: ``,
  });

  return (
    <S.Wrapper>
      <Markdown>
        <Menubar editor={editor} />
        <S.Content>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
    </S.Wrapper>
  );
};
