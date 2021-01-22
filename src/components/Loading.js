import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../assets/logo.png';
import logo2 from '../assets/logo2x.png';
import logo3 from '../assets/logo3x.png';

const LoadingContainer = styled.div`
  flex: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Img = styled.img`
  height: 30vh;
  animation-name: ${LogoAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const Text = styled.h2`
  font-size: 3rem;
  margin-top: 1rem;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Img
        src={logo3}
        srcSet={`${logo} 440w, ${logo2} 880w, ${logo3} 1320w`}
        alt='logo'
      />
      <Text>Laddar</Text>
    </LoadingContainer>
  );
};

export default Loading;
