import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Markdown from '../../styles/Mardown';
import MenuBar from './MenuBar/index';
import { Teste } from './initialContent';
import Options from './Options';
import * as S from './styled';

export type PostProps = {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
  author: {
    name?: string;
    email: string;
    image?: string;
  } | null;
  content: string;
  preview: string;
  published: boolean;
};

export const TextEditor: React.FC<{ post?: PostProps }> = ({ post }) => {
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [ID, setID] = React.useState(post ? post.id : '');

  const editor = useEditor({
    extensions: Options,
    content: post ? post.content : '',
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
      if (!ID) {
        fetch('/api/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post })
        }) 
        .then((res) => res.json())
        .then((res) => {
          console.log('RES:', res)
          setID(res?.post?.id)
        });
      } else {
        fetch(`/api/post/${ID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post })
        }) 
        .then((res) => res.json())
        .then((res) => {
          console.log('RES:', res)
          setID(res?.post?.id)
        });
      }
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
            <S.Title value={title} onChange={handleTitle} placeholder='Escreva o título aqui' />
          </S.TitleContainer>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
    </S.Wrapper>
  );
};

export default TextEditor