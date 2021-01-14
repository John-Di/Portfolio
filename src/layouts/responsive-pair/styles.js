import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../resume-layout/styles';
import {
	idealTextColor
} from '../../utils/randoms';

const sideBySide = (acc, rule, i) => `
	${acc}

	@media ${rule.bp} {
		float: left;
		display: inline-flex;
		max-width: 50%;
		flex: 1 50%;
		vertical-align: bottom;
	}
`;

const veticalStacked = (acc, rule, i) => `
	${acc}

	@media ${rule.bp} {
		flex: 1 100%;
		max-width: 100%;
		max-height: 100%;
		height: 100%;
		width: 100%;
			
		@supports not (display:grid) {
		}
	}
`;

const pairLayout = ({ isEven = false, isFlipped, adjacentBreakpoints, stackedBreakpoints }) => `
	flex-flow: ${isFlipped ? `column-reverse` : `column`};
	${adjacentBreakpoints.reduce((acc, rule, i) => `
		${acc}
		
		@media ${rule.bp} {
			${rule.alternates && isEven ? `
				flex-direction: row-reverse;
			` : `flex-direction: row;`}
		}
	`, '')}

	${stackedBreakpoints.reduce((acc, rule, i) => `
		${acc}
		
		@media ${rule.bp} {
			${rule.alternates && isEven ? `
				flex-direction: column;
			` : `flex-direction: column-reverse;`}
		}
	`, '')}
`;



const pairItemRules = (adjacent, stacked) => `
	flex: 1 100%;
	max-width: 100%;
	max-height: 100%;
	height: 100%;
	width: 100%;

	${adjacent.reduce(sideBySide, ``)}

	${stacked.reduce(veticalStacked, ``)
	}
`;

const generatePseudo = ({ pseudo = `before`, adjacentBreakpoints, stackedBreakpoints, backgroundColor = '', backgroundImage = '', isSquare, minHeight = '50vh' }) => `
	position: relative;
	&::${pseudo} {
		content: '';
		display: block;

		${backgroundColor && `background-color: ${backgroundColor};`}
		${backgroundImage && `background-image: url('${backgroundImage}');`}
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		${pairItemRules(adjacentBreakpoints, stackedBreakpoints)}

		${isSquare ? `
			padding-top: 100%;
		` : `
			min-height: ${minHeight};
		`}		

		${adjacentBreakpoints.reduce((acc, rule, i) => `
			${acc}
			
			@media ${rule.bp} {
				${isSquare && `
					padding-top: 50%;
				`}
			}
		`, '')}

		${stackedBreakpoints.reduce((acc, rule, i) => `
			${acc}
			
			@media ${rule.bp} {
				${isSquare && `
					padding-top: 100%;
					min-height: unset;
				`}
			}
		`, '')}
	}
`;

const assessProps = (props) => `
		
	${props.backgroundColor ? `background-color: ${props.backgroundColor};` : ``}

	${props.hasPaddingSmall ? `
		padding: 4em 0;
	` : ''}

	${props.hasPaddingLarge ? `
		@media ${device.laptop} {
			padding: 8em 0;
		}
	` : ''}

	${pairLayout(props)}
`

export const LAYOUT = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;

	@media ${device.tablet} {
		${props => props.hasPadding ? `padding: 5em 0;` : ''}
		${CLEARFIX}
	}

	${props => props.hasPseudo && generatePseudo(props)}
	${props => assessProps(props)}
`;

export const ITEM = styled.div`
	display: inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	${props => pairItemRules(props.adjacentBreakpoints, props.stackedBreakpoints)}
`
