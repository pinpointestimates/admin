// import styled from 'styled-components';
// import Colors from '../colors/Colors';
// import {
//   ContainerBackground,
//   ContainerBackgroundAccent,
//   ContainerBackgroundNeutral,
// } from '../colors/Container';
// import { TextColor, TextColorAccent } from '../colors/TextColors';

// export const Container = styled.div`
//   background-color: ${(props) => {
//     if (props.accent) {
//       return ContainerBackgroundAccent;
//     }
//     if (props.neutral) {
//       return ContainerBackgroundNeutral;
//     }
//     return ContainerBackground;
//   }};
//   color: ${(props) => {
//     if (props.accent) {
//       return TextColorAccent;
//     }
//     if (props.neutral) {
//       return TextColor;
//     }
//     return TextColor;
//   }};
//   background-image: ${(props) =>
//     !!props.gradient
//       ? `linear-gradient(${props.gradient}, ${Colors.teal}, ${Colors.blue});`
//       : 'none'};
//   /* box-shadow: 0 18px 46px -5px #e2e2e2; */
// `;
