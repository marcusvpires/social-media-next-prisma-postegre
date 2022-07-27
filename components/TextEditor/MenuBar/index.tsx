import React from 'react';
import Buttons from './Buttons';
import Heading from './Heading';
import { Editor } from '@tiptap/react';

import { Save, PaperPlane } from '@styled-icons/boxicons-regular';
import * as S from './styled';

type PropsType = {
  editor: Editor;
  title: string;
  submit: Function;
};

const MenuBar: React.FC<PropsType> = ({ editor, title, submit }) => {
  if (!editor) return <S.MenuBar />;
  return (
    <S.MenuBar>
      <S.ButtonGroup>
        <Heading editor={editor} />
      </S.ButtonGroup>
      {Buttons(editor).map((group, index) => (
        <S.ButtonGroup key={index}>
          {group.map((btn, index) => (
            <S.Button key={index} onClick={btn.onClick} isActive={btn.isActive}>
              {btn.Icon}
            </S.Button>
          ))}
        </S.ButtonGroup>
      ))}
      <S.ButtonGroup>
        <S.Button onClick={() => submit(editor, title)}>
          <Save />
        </S.Button>
        <S.Button onClick={() => submit(editor, title, true)}>
          <PaperPlane />
        </S.Button>
      </S.ButtonGroup>
    </S.MenuBar>
  );
};

export default MenuBar;
