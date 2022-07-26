import { LockAlt } from '@styled-icons/boxicons-regular';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--red-d);
  text-align: center;
  margin: .5rem;
  `;
const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--txt-1);
  text-align: center;
  margin: .5rem;
`;
const Icon = styled.div`
  height: 5rem;
  width: 5rem;
  color: var(--red-d);
  margin: .5rem;
`;

const NotAuthorized: React.FC = () => (
  <Wrapper>
    <Container>
      <Title>Não autorizado</Title>
      <Description>Faça loguin para continuar</Description>
      <Icon><LockAlt /></Icon>
    </Container>
  </Wrapper>
);

export default NotAuthorized;
