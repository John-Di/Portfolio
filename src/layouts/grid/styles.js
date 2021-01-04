import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const GRID = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media ${device.tablet} {
		grid-template-columns: repeat(${props => Math.floor(props.cols / 2)}, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(${props => props.cols}, 1fr);
	}

	@supports not (display:grid) {
		${CLEARFIX}
	}
`;

export const ITEM = styled.div`
	max-width: 100%;

	@media ${device.tablet} {
		width: 100%;
		
		@supports not (display:grid) {
			float: left;
			display: inline-block;
			max-width: ${props => 100 / props.cols}%;
		}
	}
`
