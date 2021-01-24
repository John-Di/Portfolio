import styled from 'styled-components';
import { ButtonReset } from '../../utils/Resets';

export const BUTTON = styled.button`
	cursor: pointer;
	${ButtonReset}
	${props => assessProps(props)}

`;

const assessProps = props => `
	${assessTheme(props)}
`;

const assessTheme = ({ theme, modest = { isModest: false }, parentColor = false, backgroundColor = false, textColor = '#000000', borderColor = false }) => {
  switch (theme) {
    case 'fancy':
    default:
      return `
			font-family: 'Roboto', serif;
			border-style: solid;
			min-width: 5em;
			text-transform: uppercase;
			letter-spacing: 0.2px;

			${!modest.isModest && `border-width: 0.25em;`}
			padding:${modest.isModest ? '0.25em 2em' : `0.75em 2em`};

			${backgroundColor ? `background-color: ${backgroundColor};` : ``}
			${textColor ? `color: ${textColor};` : ``}
			${borderColor ? `border-color: ${borderColor};` : ``}
		`;
  }
};
