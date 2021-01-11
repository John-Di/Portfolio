import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';
import { CLEARFIX } from '../resume-layout/styles';

const sideBySide = `
	float: left;
	display: inline-block;
	max-width: 50%;
	flex: 1 50%;
	vertical-align: bottom;
`;

const veticalStacked = ` 
	flex: 1 100%;
	max-width: 100%;
	max-height: 100%;
	height: 100%;
	width: 100%;
		
	@supports not (display:grid) {
	}
`;

const pairLayout = ({ hasPaddingSmall = false, hasPaddingLarge = false, isEven, isFlippedSmall = false, isFlippedLarge = false, adjacentBreakpoints, stackedBreakpoints }) => `
	flex-flow: ${isFlippedSmall && `column-reverse` || `column`};

	${hasPaddingSmall && `
		padding: 4em 0;
	`};

	${hasPaddingLarge && `
		@media ${device.tablet} {
			padding: 8em 0;
		}
	`}

	${adjacentBreakpoints.reduce((acc, rule, i) => `
		${acc}
		
		@media ${rule.bp} {
			flex-direction: ${isEven || isFlippedLarge ? `row-reverse` : `row`};
		}
	`, '')}

	${stackedBreakpoints.reduce((acc, rule, i) => `
		${acc}
		
		@media ${rule.bp} {
			flex-direction: ${isEven || isFlippedLarge ? `column-reverse` : `column`};
		}
	`, '')}
`;

const pairItemRules = (ajdacent, stacked) => `
	${veticalStacked}

	${ajdacent.reduce((acc, rule, i) => `
			${acc}

			@media ${rule.bp} {
					${sideBySide}
				}
		`, ``)
	}

	${stacked.reduce((acc, rule, i) => `
			${acc}

			@media ${rule.bp} {
				${veticalStacked}
			}
		`, ``)
	}
`;

const generatePseudo = ({ pseudo = 'before', adjacentBreakpoints, stackedBreakpoints, backgroundColor = '', backgroundImage = '', isSquare, minHeight = '50vh' }) => `
	position: relative;
	&::before {
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

			@media ${device.tablet} {
				padding-top: 50%;
			}
		` : `
			min-height: ${minHeight};

			@media ${device.tablet} {
				padding-top: 0;
			}
		`}		
	}
`;

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
		
	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
	`}

	${props => props.hasPseudo && generatePseudo(props)}
	${props => pairLayout(props)}
`;

export const ITEM = styled.div`
	display: inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	${props => pairItemRules(props.adjacentBreakpoints, props.stackedBreakpoints)}
`
