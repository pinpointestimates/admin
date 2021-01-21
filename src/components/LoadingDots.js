import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wave = keyframes`
 	0%, 60%, 100% {
 		transform: initial;
 	}
 	30% {
 		transform: translateY(-8px);
 	}
`;

const DotsContainer = styled.div`
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Dot = styled.span`
  display: inline-block;
  width: ${props => (props.size ? props.size : '4px')};
  height: ${props => (props.size ? props.size : '4px')};
  border-radius: 50%;
  margin-right: 3px;
  background: ${props => (props.color ? props.color : '#303131')};
  animation: ${Wave} 1.3s linear infinite;
  animation-delay: ${props => props.delay.toString() + 's'};
`;

export default function LoadingDots({ color, size }) {
  return (
    <DotsContainer id="wave">
      <Dot delay={-1.2} color={color} size={size}></Dot>
      <Dot delay={-1.1} color={color} size={size}></Dot>
      <Dot delay={-0.9} color={color} size={size}></Dot>
    </DotsContainer>
  );
}
