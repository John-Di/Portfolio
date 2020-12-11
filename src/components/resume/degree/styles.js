import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';
import { H2, H3, SPAN, P, LI } from '../../../layouts/resume-layout/styles';

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

export const NAME = styled(H3)`
	display: inline-block;
	font-size: 0.8125em;
	font-weight: normal;
	margin: 0.6875em auto;
	width: 100%;
`;
