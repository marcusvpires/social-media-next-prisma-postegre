import React, { ReactNode } from "react";
import Layout from "../Layout";
import Sicbar from './Sidebar' 
import * as S from "./styled"

type Props = {
  children: ReactNode;
};

const DashbordLayout: React.FC<Props> = (props) => (
  <Layout>
    <S.Main>
      <Sicbar />
      {props.children}
    </S.Main>
  </Layout>
)

export default DashbordLayout
