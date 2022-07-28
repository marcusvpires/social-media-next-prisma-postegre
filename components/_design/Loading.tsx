import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loafing: React.FC = () => (
  <Container>
    <Spin />
  </Container>
);

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const Spin = styled.div`
  position: absolute;
  border: 0.2em solid var(--txt-3);
  border-top: 0.2em solid var(--txt-2);
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  animation: ${spin} 0.6s linear infinite;
`;

export default Loafing;
