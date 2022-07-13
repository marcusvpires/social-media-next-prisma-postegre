import React from 'react';
import Link from 'next/link';
import * as S from './styled';

import { headerLinks } from './content';
import { Layer } from '@styled-icons/boxicons-regular';

const Header: React.FC = () => (
  <S.Wrapper>
    <Link href='/' passHref>
      <S.Logo>
        <S.LogoIcon>
          <Layer />
        </S.LogoIcon>
        <S.LogoLabel>Mooncacke</S.LogoLabel>
      </S.Logo>
    </Link>

    <S.LinksList>
      {headerLinks.map(({ label, href }, index) => (
        <S.LinkContainer key={index}>
          <Link href={href} passHref>
            <S.Link>{label}</S.Link>
          </Link>
        </S.LinkContainer>
      ))}
    </S.LinksList>
  </S.Wrapper>
);

export default Header;
