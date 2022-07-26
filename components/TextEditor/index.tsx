import React from 'react';
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
  const submit = async (editor, title, published = false) => {
    try {
      const content = editor.getHTML();
      const preview = editor.getText()
      const post = { title, content, preview, published };
      fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post })
      }) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.Wrapper>
      <Markdown>
        <MenuBar editor={editor} title={title} submit={submit}/>
        <S.Content>
          <S.TitleContainer>
            <S.Title value={title} onChange={handleTitle} placeholder='Escreva o tpitulo aqui' />
          </S.TitleContainer>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
    </S.Wrapper>
  );
};
