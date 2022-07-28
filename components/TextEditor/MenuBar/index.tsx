import React from 'react';
import Buttons from './Buttons';
import Heading from './Heading';
import Loading from '../../_design/Loading';

import { Editor } from '@tiptap/react';
import { Save, PaperPlane } from '@styled-icons/boxicons-regular';

import * as S from './styled';

type PropsType = {
  editor: Editor;
  title: string;
  submit: Function;
  isLoading: string;
};

const MenuBar: React.FC<PropsType> = ({ editor, title, submit, isLoading }) => {
  if (!editor) return <S.MenuBar />;
  return (
    <S.MenuBar>
      <S.Tools>
        <S.ButtonGroup>
          <Heading editor={editor} />
        </S.ButtonGroup>
        {Buttons(editor).map((group, index) => (
          <S.ButtonGroup key={index}>
            {group.map((btn, index) => (
              <S.Button
                onClick={btn.onClick}
                key={index}
                bg={btn.isActive ? 'var(--bg-3)' : 'transparent'}
              >
                <S.ButtonIcon>{btn.Icon}</S.ButtonIcon>
              </S.Button>
            ))}
          </S.ButtonGroup>
        ))}
        <S.ButtonGroup>
          <S.Button
            onClick={!isLoading ? () => submit(editor, title) : () => {}}
          >
            <S.ButtonIcon>
              {isLoading === 'salvar' ? <Loading /> : <Save />}
            </S.ButtonIcon>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.Button>
          <S.Button
            color='var(--blue)'
            onClick={!isLoading ? () => submit(editor, title, true) : () => {}}
          >
            <S.ButtonIcon>
              {isLoading === 'enviar' ? <Loading /> : <PaperPlane />}
            </S.ButtonIcon>
            <S.ButtonText>Publicar</S.ButtonText>
          </S.Button>
        </S.ButtonGroup>
      </S.Tools>
    </S.MenuBar>
  );
};

export default MenuBar;
