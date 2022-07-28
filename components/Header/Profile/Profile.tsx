import React, { useRef } from 'react';
import Image from 'next/image';
import { useDropdownDisplay } from '../../_assets/useOnClickOutside';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import * as S from './styled';

type Props = {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
};

const Profile: React.FC<Props> = ({ user }) => {
  const togglerRef = useRef();
  const dropdownRef = useRef();
  const [ display, handleDisplay ] = useDropdownDisplay([ togglerRef.current, dropdownRef.current ])
  return (
    <S.Profile>
      <S.Photo onClick={handleDisplay} ref={togglerRef}>
        <Image alt='The guitarist in the concert.' src={user.image} layout='fill' />
      </S.Photo>
      <S.Dropdown display={display ? 1 : 0} ref={dropdownRef}>
        <Link href='/profile'>
          <S.Link>
            <S.Name>{user.name}</S.Name>
            <S.Email>{user.email}</S.Email>
          </S.Link>
        </Link>
        <S.Divider />
        <Link href='/dashbord'>
          <S.Link>Dashboard</S.Link>
        </Link>
        <Link href='/criar'>
          <S.Link>Criar publicação</S.Link>
        </Link>
        <Link href='/config'>
          <S.Link>Configurações</S.Link>
        </Link>
        <S.Divider />
        <S.Link onClick={() => signOut()}>Sair</S.Link>
      </S.Dropdown>
    </S.Profile>
  );
};

export default Profile;
