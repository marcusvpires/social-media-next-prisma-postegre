import React from 'react';
import * as S from './styled';

import { Bold, Italic, Strikethrough, Code } from '@styled-icons/boxicons-regular';

const Menubar = ({ editor }) => {
  if (!editor) return <S.Menubar />
  const menuButtons = [
    {
      Icon: <Bold />,
      onclick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      Icon: <Italic />,
      onclick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
    },
    {
      Icon: <Strikethrough />,
      onclick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
    },
    {
      Icon: <Code />,
      onclick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
    },
  ]

  return (
    <S.Menubar>
      { menuButtons.map((btn, index) => (
        <S.Button key={index} onclick={btn.onclick} isActive={btn.isActive} >
          {btn.Icon}
        </S.Button>
      ))}
    </S.Menubar>
  );
};



export default Menubar;
