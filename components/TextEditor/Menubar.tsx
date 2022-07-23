import React, { useState, useEffect } from 'react';
import * as S from './styled';

import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  ListUl,
  ListOl,
  CodeBlock,
  Minus,
  Undo,
  Redo,
  BookmarkAlt,
  SquareRounded,
  AlignJustify,
  AlignLeft,
  AlignMiddle,
  AlignRight
} from '@styled-icons/boxicons-regular';

const Select = ({ editor }) => {
  const [value, setValue] = useState('paragraph');
  useEffect(() => {
    if (editor.isActive('paragraph')) setValue('paragraph');
    else if (editor.isActive('heading', { level: 1 })) setValue('heading-1');
    else if (editor.isActive('heading', { level: 2 })) setValue('heading-2');
    else if (editor.isActive('heading', { level: 3 })) setValue('heading-3');
    else if (editor.isActive('heading', { level: 4 })) setValue('heading-4');
  });
  const handleChange = (ev) => {
    const newValue = ev.target.value;
    setValue(newValue);
    switch (newValue) {
      case 'paragraph':
        editor.chain().focus().setParagraph().run();
        break;
      case 'heading-1':
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case 'heading-2':
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case 'heading-3':
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case 'heading-4':
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
    }
  };
  return (
    <S.Select value={value} onChange={handleChange}>
      <S.Option value='paragraph'>Parágrafo</S.Option>
      <S.Option value='heading-1'>h1</S.Option>
      <S.Option value='heading-2'>h2</S.Option>
      <S.Option value='heading-3'>h3</S.Option>
      <S.Option value='heading-4'>h4</S.Option>
    </S.Select>
  );
};

const MenuBar = ({ editor }) => {
  if (!editor) return <S.Menubar />;

  return (
    <S.Menubar>
      <Select editor={editor} />
    
      <S.Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      >
        <Bold />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      >
        <Italic />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
      >
        <Strikethrough />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        isActive={editor.isActive('code')}
      >
        <Code />
      </S.Button>
      <S.Button
        onClick={() => {
          editor.chain().focus().unsetAllMarks().run();
          editor.chain().focus().clearNodes().run();
        }}
      >
        <SquareRounded />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        <ListUl />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      >
        <ListOl />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock')}
      >
        <CodeBlock />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
      >
        <BookmarkAlt />
      </S.Button>
      <S.Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus />
      </S.Button>
      <S.Button onClick={() => editor.chain().focus().undo().run()}>
        <Undo />
      </S.Button>
      <S.Button onClick={() => editor.chain().focus().redo().run()}>
        <Redo />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        isActive={editor.isActive({ textAlign: 'left' })}
      >
        <AlignLeft />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        isActive={editor.isActive({ textAlign: 'center' })}
      >
        <AlignMiddle />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        isActive={editor.isActive({ textAlign: 'right' })}
      >
        <AlignRight />
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        isActive={editor.isActive({ textAlign: 'justify' })}
      >
        <AlignJustify />
      </S.Button>
    </S.Menubar>
  );
};

export default MenuBar;
