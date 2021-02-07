import styled from 'styled-components';
import { ButtonReset } from '../../utils/Resets';
import {
  conditionalProp
} from '../../utils/AssessProps';
import IdealTextColor from '../../utils/IdealTextColor';


export const BUTTON = styled.button`
	cursor: pointer;
	${ButtonReset}
	${props => assessProps(props)}

`;

const assessProps = props => `
	${assessTheme(props)}
`;

const assessTheme = ({ theme, modest = { isModest: false }, parentColor = false, backgroundColor = false, textColor = '#000000', borderColor = false, accentColor }) => {
  switch (theme) {
    case 'fancy':
    default:
      return `
      font-family: 'Roboto', 'Montserrat', serif;
      font-weight: normal;
			border-style: solid;
      min-width: 5em;
      max-width: 15em;
			text-transform: uppercase;
      letter-spacing: 0.2px;
      transition: background-color 0.1s, color 0.1s;

			${conditionalProp(!modest.isModest, `border-width: 0.25em;`)}
			padding:${conditionalProp(modest.isModest, '0.25em 2em', `0.75em 2em`)};

			${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
			${conditionalProp(textColor, `color: ${textColor};`)}
      ${conditionalProp(borderColor, `border-color: ${borderColor};`)}

      &:hover,
      &:focus {

        ${conditionalProp(textColor, `background-color: ${textColor};`)}
        ${conditionalProp(accentColor,
        `color: ${accentColor};`,
        conditionalProp(backgroundColor, `color: ${backgroundColor};`, `color: ${IdealTextColor(textColor)};`))}
        ${conditionalProp(textColor, `border-color: ${textColor};`)}
      }
		`;
  }
};
