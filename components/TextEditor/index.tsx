import React, { useState } from 'react';

import { EditorContent, useEditor, Editor } from '@tiptap/react';
import { Feedback, useFeedback } from '../_design/Feedback';

import Markdown from '../../styles/Mardown';
import MenuBar from './MenuBar/index';
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
  const [feedback, setFeedback] = useFeedback();
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [ isLoading, setLoading ] = useState('')
  const [ID, setID] = React.useState(post ? post.id : '');

  const editor = useEditor({
    extensions: Options,
    content: post ? post.content : '',
  });

  const handleTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setTitle(value);
  };

  const submit = async (editor: Editor, title: string, published = false) => {
    try {
      setLoading(( published ? 'enviar' : 'salvar' ))
      const content = editor.getHTML();
      const preview = editor.getText();
      if (content === '<p></p>' || !title) {
        setFeedback(
          `Escreva algo e defina um título para ${published ? 'Publicar' : 'Salvar'}`,
          'warn'
        );
        setLoading('')
        return;
      }
      const post = { title, content, preview, published };
      if (!ID) {
        fetch('/api/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.ok) setFeedback(`${res.post.published ? 'Publicado' : 'Salvo'} com sucesso`, 'success');
            setLoading('')
            setID(res?.post?.id);
          })
          .catch((error) => {
            console.log(error);
            setLoading('')
            setFeedback('Houve um erro inesperado', 'error');
          });
      } else {
        fetch(`/api/post/${ID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            if (res.ok) setFeedback(`${res.post.published ? 'Publicado' : 'Salvo'} com sucesso`, 'success');
            setLoading('')
            setID(res?.post?.id);
          })
          .catch((error) => {
            console.log(error);
            setLoading('')
            setFeedback('Houve um erro inesperado', 'error');
          });
      }
    } catch (error) {
      console.error(error);
      setFeedback('Houve um erro inesperado', 'error');
      setLoading('')
    }
  };

  return (
    <S.Wrapper>
      <Markdown>
        <MenuBar editor={editor} title={title} submit={submit} isLoading={isLoading} />
        <S.Content>
          <S.TitleContainer>
            <S.Title
              value={title}
              onChange={handleTitle}
              placeholder='Escreva o título aqui'
            />
          </S.TitleContainer>
          <S.TextEditor>
            <EditorContent editor={editor} />
          </S.TextEditor>
        </S.Content>
      </Markdown>
      <Feedback feedback={feedback} />
    </S.Wrapper>
  );
};

export default TextEditor;
