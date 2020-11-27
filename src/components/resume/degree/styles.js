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

export const TOGGLE = styled.div`
	display: flex;
	flex-flow: column nowrap;

	@media ${device.laptop} { 
		flex-flow: row nowrap;
	}
`;

export const NAME = styled(H3)`
	display: inline-block;
	font-size: 0.8125em;
	font-weight: normal;
	margin: 0.6875em auto;
	width: 100%;
`;

export const DEGREE_DESC = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: start;
	margin-top: 0.3125em;
	font-size: 0.75em;
`;

export const ALMAMATER = styled(SPAN)`
	margin-left: 1.5em;
`;

export const ICON_TEXT = styled(SPAN)`
	margin-left: 1em;
`;

export const ICON_WRAPPER = styled(SPAN)`
	display: inline-block;
	text-align: center;
`;

export const DURATION = styled(ICON_TEXT)`
	margin-left: 1em;
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
`;
