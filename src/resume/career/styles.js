import styled from 'styled-components';
import { device } from '../../utils/variables';

export const H1 = styled.h1`
	font-size: 1.5em;
	margin: 2.2969em auto 0.5em;
	line-height: 1.1;
`;
export const H2 = styled.h2`
	font-size: 1em;
	line-height: 1.1;
	font-size: 1em;
	margin-top: 2em 0 0.625em;
`;

export const DIVIDER = styled.hr`
	margin: 0.875em auto 1.3125em 0;

	@media ${device.laptop} {
		max-width: 50%;
		margin-right: 5em;
	}
`;
