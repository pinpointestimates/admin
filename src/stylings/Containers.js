import styled from 'styled-components';
import theme from 'styled-theming';
import Colors from './Colors';

export const LightBackground = theme('mode', {
  light: Colors.gray,
  dark: Colors.blue,
});

export const LightContainer = styled.div`
  background: ${LightBackground};
  box-shadow: 0 0.1em 0.6em 0 ${LightBackground};
`;
