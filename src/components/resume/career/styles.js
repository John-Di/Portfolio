import styled from 'styled-components';
import { device } from '../../../utils/variables';
import {
	H2,
	HR
} from '../../../layouts/resume-layout/styles';

export const HEADING = styled(H2)`
	font-size: 1em;
	margin-top: 2em;
	margin-bottom: 0.625em;
`;

export const DIVIDER = styled(HR)`
	margin-right: auto;

	@media ${device.laptop} { 
		max-width: 50%;
		margin-right: 5em;
	}
`;
