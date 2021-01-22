import styled from 'styled-components';
import theme from 'styled-theming';
import Colors from './Colors';

export const PrimaryBackground = theme('mode', {
  light: Colors.teal,
  dark: Colors.darkBlue,
});

export const PrimaryColor = theme('mode', {
  light: Colors.white,
  dark: Colors.white,
});

export const PrimaryBorder = theme('mode', {
  light: Colors.teal,
  dark: Colors.black,
});

export const PrimaryShadow = theme('mode', {
  light: Colors.tealBorder,
  dark: Colors.red,
});

export const PrimaryDisabled = theme('mode', {
  light: Colors.gray,
  dark: Colors.gray,
});

export const Button = styled.button`
  padding: 0.4em 2em;
  border-radius: 0.3em;
  border: 1px solid ${PrimaryBorder};
  background-color: ${PrimaryBackground};
  color: ${PrimaryColor};
  cursor: pointer;
  width: max-content;

  font-family: Poppins;
  font-size: 0.6em;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;

  box-shadow: 0px 0.2em 0px ${PrimaryShadow};

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${PrimaryDisabled};
    box-shadow: 0px 0.2em 0px ${PrimaryDisabled};
    border: 1px solid ${PrimaryDisabled};
  }
`;

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
