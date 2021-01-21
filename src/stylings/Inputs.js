import styled from 'styled-components';
import theme from 'styled-theming';
import Colors from './Colors';

export const PrimaryInputColor = theme('mode', {
  light: Colors.gray,
  dark: Colors.gray,
});

export const PrimaryInputFocus = theme('mode', {
  light: Colors.grayDark,
  dark: Colors.grayDark,
});

export const PrimaryInputColorText = theme('mode', {
  light: Colors.black,
  dark: Colors.black,
});

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: solid 1px ${PrimaryInputColor};
  background: ${PrimaryInputColor};
  padding: 0.8em 0.8em;
  box-sizing: border-box;
  font-family: Lato;
  font-size: 0.6em;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 0px;
  color: ${PrimaryInputColorText};

  :focus {
    outline: ${PrimaryInputFocus} auto 2px;
  }
`;

// export const Textarea = styled.textarea`
//   width: 100%;
//   /* height: 48px; */
//   border-radius: 4px;
//   box-shadow: 0 18px 46px -11px rgba(214, 227, 227, 0.53);
//   border: solid 1px ${Colors.teal};
//   padding: 0.8em 0.8em;
//   box-sizing: border-box;

//   font-family: Lato;
//   font-size: 0.6em;
//   font-weight: normal;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: 1.71;
//   letter-spacing: 0px;
//   color: #000000;
//   resize: none;
//   :focus {
//     outline: ${Colors.teal} auto 2px;
//   }
// `;

// export const InputErrorMessage = styled.div`
//   color: ${TextColorError};
//   font-family: Poppins;
//   font-size: 0.55em;
//   font-weight: bold;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: 0px;
// `;

// export const Checkbox = styled.input`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   display: inline-block;
//   width: 1.5em;
//   height: 1.5em;
//   outline: none;
//   vertical-align: middle;
//   border-radius: 0.4em;
//   border: solid 1px ${Colors.sliderGray};
//   outline: 0;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: contain;

//   :checked {
//     background-image: url(${checker});
//   }
// `;
