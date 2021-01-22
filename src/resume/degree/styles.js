import styled from 'styled-components';
import { device } from '../../utils/variables';

export const DEGREE = styled.div`
	margin-bottom: 1em;
	width: 100%;
	flex: 1 100%;
	display: flex;
	flex-flow: column nowrap;


	@media ${device.mobileXL} {
		width: 50%;
		flex: 1 50%;
	}
`;

export const NAME = styled.h3`
	font-size: 0.8125em;
	margin: 0.6875em auto;
	line-height: 1.1;
	display: inline-block;
	font-size: 0.8125em;
	font-weight: normal;
	width: 100%;
`;
