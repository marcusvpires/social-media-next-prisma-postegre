import React from 'react';
import * as I from '@styled-icons/boxicons-regular';

type ButtonType = {
  Icon: React.ReactElement;
  onClick: Function;
  isActive?: boolean;
};

const Buttons = (editor): ButtonType[][] => [
  [
    {
      Icon: <I.Bold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      Icon: <I.Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
    },
    {
      Icon: <I.Code />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
    },
  ],
  [
    {
      Icon: <I.AlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      isActive: editor.isActive({ textAlign: 'left' }),
    },
    {
      Icon: <I.AlignMiddle />,
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      isActive: editor.isActive({ textAlign: 'center' }),
    },
    {
      Icon: <I.AlignRight />,
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      isActive: editor.isActive({ textAlign: 'right' }),
    },
    {
      Icon: <I.AlignJustify />,
      onClick: () => editor.chain().focus().setTextAlign('justify').run(),
      isActive: editor.isActive({ textAlign: 'justify' }),
    },
  ],
  [
    {
      Icon: <I.ListUl />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      Icon: <I.ListOl />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
    },
  ],
  [
    {
      Icon: <I.CodeBlock />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
    },
    {
      Icon: <I.BookmarkAlt />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
    },
    {
      Icon: <I.Minus />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
    },
  ],
  [
    {
      Icon: <I.SquareRounded />,
      onClick: () => {
        editor.chain().focus().unsetAllMarks().run();
        editor.chain().focus().clearNodes().run();
      },
    },
    {
      Icon: <I.Undo />,
      onClick: () => editor.chain().focus().undo().run(),
    },
    {
      Icon: <I.Redo />,
      onClick: () => editor.chain().focus().redo().run(),
    },
  ],
];

export default Buttons;
