import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Markdown from '../../styles/Mardown';
import Menubar from './Menubar';
import * as S from './styled';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `Hello`,
  });
  return (
    <S.Wrapper>
      <Menubar editor={editor} />
      <S.Content>
        <S.TextEditor>
          <Markdown>
            <EditorContent editor={editor} />
          </Markdown>
        </S.TextEditor>
      </S.Content>
    </S.Wrapper>
  );
};

export default TextEditor;
