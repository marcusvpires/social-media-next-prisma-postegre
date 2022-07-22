import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Dropdown from './Dropdown'
import * as S from './styled';

const Profile: React.FC = () => {
  const [drop, setDrop] = useState(false);
  const handleDrop = () => setDrop(!drop);
  const { data: session, status } = useSession();
  if (status === 'loading') return <S.Loading />;
  else {
    if (session) {
      return (
        <S.Profile>
          <S.Photo onClick={handleDrop}>
            <Image alt='The guitarist in the concert.' src={session.user.image} layout='fill' />
          </S.Photo>
          <Dropdown drop={drop} user={session.user} />
        </S.Profile>
      );
    } else {
      return (
        <S.Profile>
          <S.Loguin>
            <S.Button onClick={() => signIn('google')}>Entrar</S.Button>
          </S.Loguin>
        </S.Profile>
      );
    }
  }
};

export default Profile;
