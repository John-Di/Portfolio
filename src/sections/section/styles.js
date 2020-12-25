import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const SECTION = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	width: 100%;
	max-width: 100%;

	${props => props.hasPadding && `
		padding: 0;
	
		@media ${device.laptop} {
			padding: 0 4%;
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
