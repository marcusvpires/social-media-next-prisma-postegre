import React, { ReactNode } from "react";
import * as S from "./styled"

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <S.Wrapper>
    <S.Container>{props.children}</S.Container>
  </S.Wrapper>
)

export default Layout