import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

console.log('section/styles/');

export const HEADING = styled.div`
	width: 100%;
	flex-flow: column nowrap;

	text-align:${props => props.textAlignmentSmall ? props.textAlignmentSmall : `center`};

	@media ${device.tablet} {
		text-align:${props => props.textAlignmentLarge ? props.textAlignmentLarge : `center`};
	}

	h1 {
		font-size: 1.75em;
		font-weight: bold;

		@media ${device.tablet} {
			font-size: 3.5em;
		}
	}

	h2 {
		font-size: 1.125em;
		margin-top: 0;
		margin-bottom: 2em;
		
		@media ${device.tablet} {
			font-size: 1.5em;
		}
	}
`;

export const SECTION = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	width: 100%;
	max-width: ${props => props.maxWidth ? props.maxWidth : `100%`};

	${props => props.hasMarginSmall && `
		margin: 4em auto;	
	`}

	${props => props.hasMarginLarge && `
	
		@media ${device.laptop} {
			margin: 8em auto;
		}
	
	`}

	${props => props.hasPadding && `
		padding: 0;
	
		@media ${device.laptop} {
			padding: 0 8%;
		}
	`};
	
	${props => props.background && `
		background-image: url('${props.background}');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	`};

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
	`};

	${props => {
		if (props.cols > 2) {
			return colBreak([
				`${device.mobileL}`,
				device.tablet
			]);
		} else if (props.cols > 1) {
			return colBreak([device.mobileXL]);

		} else {
			return colBreak([device.mobileL]);
		}
	}};


	${CLEARFIX}
`;

const colBreak = (resolutions) => resolutions.reduce((acc, curr, i) => `
	${acc}
	@media ${curr} {
		flex-direction: row;
		flex-wrap: wrap;
	}
`, '');
