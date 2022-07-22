import Image from 'next/image';
import {
  Bold,
  Italic,
  Strike,
  Code,
  CodeBlock,
  ListOl,
  ListUl,
  Redo,
  Undo,
} from '@styled-icons/boxicons-regular';
import * as S from './styled';

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <S.Menu>
 
      <S.Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
      >
        <S.Icon><ListOl /></S.Icon>
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive('codeBlock')}
      >
        <S.Icon><CodeBlock /></S.Icon>
      </S.Button>
      <S.Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive('blockquote')}
      >
        <S.Icon><BlockQuote /></S.Icon>
      </S.Button>
      <S.Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <S.Icon><Divider /></S.Icon>
      </S.Button>
      <S.Button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</S.Button>
      <S.Button onClick={() => editor.chain().focus().undo().run()}><Undo /></S.Button>
      <S.Button onClick={() => editor.chain().focus().redo().run()}><Redo /></S.Button>
    </S.Menu>
  );
};

const BlockQuote = () => <Image href='/texEditor/blockquote.svg' />;
const ClearNodes = () => <Image href='\textEditor\clearNodes.svg' />;
const Divider = () => <Image href='public\textEditor\divider.svg' />;

export default MenuBar;
