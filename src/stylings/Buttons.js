// import styled from 'styled-components';
// import theme from 'styled-theming';
// import Colors from '../colors/Colors';

// const buttonBackgroundColor = theme.variants('mode', 'kind', {
//   teal: { light: Colors.teal, dark: Colors.blue },
//   tealLight: { light: Colors.tealLight, dark: Colors.red },
//   red: { light: Colors.red, dark: Colors.blue },
//   blue: { light: Colors.blue, dark: Colors.red },
//   gray: { light: Colors.grayDark, dark: Colors.grayDark },
// });

// const buttonColor = theme.variants('mode', 'kind', {
//   teal: { light: Colors.white, dark: Colors.white },
//   tealLight: { light: Colors.white, dark: Colors.white },
//   red: { light: Colors.black, dark: Colors.white },
//   blue: { light: Colors.white, dark: Colors.black },
// });

// const buttonBorderColor = theme.variants('mode', 'kind', {
//   teal: { light: Colors.tealBorder, dark: Colors.redBorder },
//   tealLight: { light: Colors.tealLightBorder, dark: Colors.redBorder },
//   red: { light: Colors.redBorder, dark: Colors.blueBorder },
//   blue: { light: Colors.blueBorder, dark: Colors.redBorder },
// });

// const buttonBackgroundColorDisabled = theme.variants('mode', 'kind', {
//   teal: { light: Colors.grayDark, dark: Colors.grayDark },
//   red: { light: Colors.grayDark, dark: Colors.grayDark },
//   blue: { light: Colors.grayDark, dark: Colors.grayDark },
// });

// const buttonBorderColorDisabled = theme.variants('mode', 'kind', {
//   teal: { light: Colors.grayDarkBorder, dark: Colors.grayDarkBorder },
//   red: { light: Colors.grayDarkBorder, dark: Colors.grayDarkBorder },
//   blue: { light: Colors.grayDarkBorder, dark: Colors.grayDarkBorder },
// });

// export const Button = styled.button`
//   padding: 0.4em 2em;
//   border-radius: 0.3em;
//   border: 0;
//   background-color: ${buttonBackgroundColor};
//   color: ${buttonColor};
//   cursor: pointer;
//   width: max-content;

//   font-family: Poppins;
//   font-size: 0.6em;
//   font-weight: 600;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: 0px;

//   box-shadow: 0px 0.2em 0px ${buttonBorderColor};

//   :focus {
//     outline: none;
//   }

//   :disabled {
//     background-color: ${buttonBackgroundColorDisabled};
//     box-shadow: 0px 0.2em 0px ${buttonBorderColorDisabled};

//     box-shadow: 0;
//   }
// `;

// export const ButtonRounded = styled.button`
//   padding: 0.8em;
//   border-radius: 2em;
//   border: solid 2px ${buttonBackgroundColor};
//   background-color: ${buttonBackgroundColor};
//   color: ${buttonColor};
//   cursor: pointer;

//   :focus {
//     outline: none;
//   }

//   :disabled {
//     border: solid 2px ${buttonBackgroundColorDisabled};
//     background-color: ${buttonBackgroundColorDisabled};
//   }
// `;

// export const ButtonInverted = styled.button`
//   border-radius: 0.5em;
//   box-shadow: 0 0.5em 1em -0.5em rgba(0, 0, 0, 0.14);
//   border: solid 2px ${buttonBackgroundColor};
//   color: ${buttonBackgroundColor};
//   background-color: transparent;
//   height: max-content;
//   padding: 0.5em 0.5em;
//   cursor: pointer;
//   margin: auto;
//   font-family: Poppins;
//   font-size: 0.5em;
//   font-weight: 600;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: 0px;

//   :focus {
//     outline: none;
//   }

//   :disabled {
//     border: solid 2px ${buttonBackgroundColorDisabled};
//     background-color: ${buttonBackgroundColorDisabled};
//   }
// `;
