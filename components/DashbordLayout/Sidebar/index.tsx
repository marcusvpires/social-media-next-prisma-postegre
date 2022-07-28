import React, { ReactNode } from "react";
import Link from "next/link";
import * as S from "./styled"

const content = [
  {
    label: 'Dashboard',
    href: '/dashbord'
  },
  {
    label: 'Publicados',
    href: '/dashbord/publicados'
  },
  {
    label: 'Rascunhos',
    href: '/dashbord/rascunhos'
  },
  {
    label: 'Perfil',
    href: '/dashbord/perfil'
  },
  {
    label: 'Comentários',
    href: '/dashbord/comentarios'
  },
]

const DashbordLayout: React.FC = () => (
  <S.Wrapper>
    { content.map((link, index) => (
      <Link href={link.href} key={index} >
        <S.Item>{ link.label }</S.Item>
      </Link>
    )) }
  </S.Wrapper>
)

export default DashbordLayout
