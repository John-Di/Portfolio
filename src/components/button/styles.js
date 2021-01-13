import styled from 'styled-components';
import { device } from '../../utils/variables';

const RESET = `
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
`;

export const BUTTON = styled.button`
	cursor: pointer;
	${RESET}	
	${props => assessProps(props)}

`;

const assessProps = props => `
	${assessTheme(props)}

	${props.backgroundColor && `background-color: ${props.backgroundColor};` || ''}
	${props.textColor && `color: ${props.textColor};` || ''}
	${props.borderColor && `border-color: ${props.borderColor};` || ''}
`;

const assessTheme = ({ theme, modest = false }) => {
	switch (theme) {
		case 'fancy':
		default:
			return `
			font-family: 'Roboto', serif;
			border-style: solid;
			min-width: 5em;
			text-transform: uppercase;
			letter-spacing: 0.2px;
			
			${modest.isModest ? '' : `border-width: 0.25em;`}
			padding:${modest.isModest ? '0.25em 2em' : `0.75em 2em`};
		`;
	}
};