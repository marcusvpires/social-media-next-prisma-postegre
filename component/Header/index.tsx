import React from 'react';
import Link from 'next/link';
import * as S from './styled';

import { headerLinks } from './content';

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
