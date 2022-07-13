import React from 'react';
import Link from 'next/link';
import { headerLinks } from './content';
import * as S from './styled';

const Header: React.FC = () => (
  <S.Wrapper>

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
