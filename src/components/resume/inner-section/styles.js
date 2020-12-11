import styled from 'styled-components';
import { device } from '../../../utils/variables';
import {
	H3
} from '../../../layouts/resume-layout/styles';

export const WRAPPER = styled.div`
	width: 100%;
	
	&:not(:first-child):not(:last-child) {
		margin: 0.5em 0;
	}
`;

export const HEADING = H3;

export const INNER = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
