// import React from 'react';
// import styled from 'styled-components';
// import { TextColor } from '../colors/TextColors';
// import { withRouter } from 'react-router-dom';

// export const Link = styled.div`
//   font-family: Lato;
//   font-size: 0.9em;
//   font-weight: normal;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: 1.56;
//   letter-spacing: 0px;
//   color: ${TextColor};
//   cursor: pointer;
// `;

// const LinkAnimationContainer = styled.div`
//   border-bottom: 2px solid transparent;
//   transition: border-color 0.8s;
//   width: min-content;
//   &:hover {
//     border-color: ${(props) => (props.color ? props.color : '#000')};
//   }
// `;

// export const LinkAnimation = withRouter(({ children, color, to, history }) => {
//   const handleClick = () => {
//     if (!!to) history.push(to);
//   };

//   return (
//     <LinkAnimationContainer color={color} onClick={handleClick}>
//       {children}
//     </LinkAnimationContainer>
//   );
// });
