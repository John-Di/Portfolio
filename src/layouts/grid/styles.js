import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const GRID = styled.div`
	display: grid;
	width: 100%;
	${props => props.rules || ''}

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
			max-width: ${props => props.maxWidth}%;
		}
	}
`
