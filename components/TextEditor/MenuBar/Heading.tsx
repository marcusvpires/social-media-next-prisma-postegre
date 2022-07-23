import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';

const Heading = (editor) => {
  // const [selected, setSelected] = useState('paragraph');
  const [display, setDisplay] = useState<boolean>(false);
  const selectRef = useRef();
  const handleDisplay = () => setDisplay(!display);
  return (
    <S.Heading>
      <S.Select onClick={handleDisplay} ref={selectRef}>
        Normal
      </S.Select>
      <Dropdown editor={editor} display={display} setDisplay={setDisplay} selectRef={selectRef} />
    </S.Heading>
  );
};

const Dropdown = ({ editor, display, setDisplay, selectRef }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setDisplay(false), selectRef);
  return (
    <S.Dropdown display={display ? 1 : 0} ref={ref}>
      <S.Option>Normal</S.Option>
      <S.Option>Título 1</S.Option>
      <S.Option>Título 2</S.Option>
      <S.Option>Título 3</S.Option>
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
