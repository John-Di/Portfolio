import styled from 'styled-components';
import {
	H2
} from '../../../layouts/resume-layout/styles';

export const WRAPPER = styled.div`
	&:not(:first-child):not(:last-child) {
		margin: 1.375em 0;
	}
`;

export const HEADING = H2;

export const INNER = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
