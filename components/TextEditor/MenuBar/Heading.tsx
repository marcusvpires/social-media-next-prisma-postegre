import React, { useState, useEffect, useRef, EventHandler } from 'react';
import * as S from './styled';
import { DownArrow } from '@styled-icons/boxicons-regular';

const Heading = ({ editor }) => {
  const [selected, setSelected] = useState('paragraph');
  const [display, setDisplay] = useState<boolean>(false);
  const selectRef = useRef();
  useEffect(() => {
    if (editor.isActive('paragraph')) setSelected('Normal');
    else if (editor.isActive('heading', { level: 1 })) setSelected('Título');
    else if (editor.isActive('heading', { level: 2 })) setSelected('Subtítulo 1');
    else if (editor.isActive('heading', { level: 3 })) setSelected('Subtítulo 2');
  }, [editor]);
  const handleDisplay = () => setDisplay(!display);
  return (
    <S.Heading>
      <S.Select onClick={handleDisplay} ref={selectRef}>
        {selected}
        <S.SelectIcon display={display ? 1 : 0}>
          <DownArrow />
        </S.SelectIcon>
      </S.Select>
      <Dropdown
        editor={editor}
        display={display}
        setDisplay={setDisplay}
        selectRef={selectRef}
        setSelected={setSelected}
      />
    </S.Heading>
  );
};

const Dropdown = ({ editor, display, setDisplay, selectRef, setSelected }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setDisplay(false), selectRef);
  const handleClick = (value: string) => {
    setSelected(value);
    setDisplay(false);
    switch (value) {
      case 'Normal':
        editor.chain().focus().setParagraph().run();
        break;
      case 'Título':
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case 'Subtítulo 1':
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case 'Subtítulo 2':
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      default:
        editor.chain().focus().setParagraph().run();
        break;
    }
  };
  return (
    <S.Dropdown display={display ? 1 : 0} ref={ref}>
      <S.Option onClick={() => handleClick('Normal')}>Normal</S.Option>
      <S.Option onClick={() => handleClick('Título')}>Título</S.Option>
      <S.Option onClick={() => handleClick('Subtítulo 1')}>Subtítulo 1</S.Option>
      <S.Option onClick={() => handleClick('Subtítulo 2')}>Subtítulo 2</S.Option>
    </S.Dropdown>
  );
};

const useOnClickOutside = (ref, handler, selectRef) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        !selectRef.current ||
        ref.current.contains(event.target) ||
        selectRef.current.contains(event.target)
      )
        return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default Heading;
