import React from 'react';
import Buttons from './Buttons';
import Heading from './Heading';
import * as S from './styled';

const MenuBar = ({ editor, title }) => {
  if (!editor) return <S.MenuBar />;
  return (
    <S.MenuBar>
      <S.ButtonGroup>
        <Heading editor={editor}/>
      </S.ButtonGroup>
      {Buttons(editor, title).map((group, index) => (
        <S.ButtonGroup key={index}>
          {group.map((btn, index) => (
            <S.Button key={index} onClick={btn.onClick} isActive={btn.isActive}>
              {btn.Icon}
            </S.Button>
          ))}
        </S.ButtonGroup>
      ))}
    </S.MenuBar>
  );
};

export default MenuBar;
