import React from 'react';
import * as S from './styled';

import { Bold, Italic, Strikethrough, Code } from '@styled-icons/boxicons-regular';

const Menubar: React.FC = () => {
  return (
    <S.Menubar>
      { menuButtons.map((button, index) => (
        <S.Icon key={index}>
          {button.Icon}
        </S.Icon>
      ))}
    </S.Menubar>
  );
};

type MenuButtons = {
  Icon: React.ReactElement
}

const menuButtons: MenuButtons[] = [
  {
    Icon: <Bold />
  },
  {
    Icon: <Italic />
  },
  {
    Icon: <Strikethrough />
  },
  {
    Icon: <Code />
  },
]

export default Menubar;
