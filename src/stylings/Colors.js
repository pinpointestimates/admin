import theme from 'styled-theming';

const Colors = {
  white: '#fff',
  black: '#000',
  blue: '#1f2344',
  blueBorder: '#1f2344',
  darkBlue: '#1d1e3c',
  red: '#f95759',
  redBorder: '#f95759',
  teal: '#1fb4a8',
  tealBorder: '#386c68',
  tealBorderBackground: 'rgba(55, 108, 103, 0.36)',
  tealBackground: 'rgba(31, 180, 168, 0.36)',
  tealLight: '#52cec5',
  tealLightBorder: '#56908d',
  gray: '#ececec',
  gray2: '#cecece',
  grayDark: '#afafaf',
  grayDarkBorder: '#767676',
  sliderGray: '#787b8e',
  pink: '#f57c7e',
  orange: '#e7635f',
};

export const DarkBackground = theme('mode', {
  light: Colors.gray,
  dark: Colors.darkBlue,
});

// export const ContainerBackground = theme('mode', {
//   light: Colors.white,
//   dark: Colors.blue,
// });

// export const ContainerBackgroundAccent = theme('mode', {
//   light: Colors.blue,
//   dark: Colors.teal,
// });

// export const ContainerBackgroundNeutral = theme('mode', {
//   light: Colors.gray,
//   dark: Colors.gray,
// });

// export const ModalInfoBackground = theme('mode', {
//   light: Colors.gray,
//   dark: Colors.gray,
// });

// export const FooterBackground = theme('mode', {
//   light: Colors.blue,
//   dark: Colors.blue,
// });

export default Colors;
