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
