import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from '../../utils/variables';
import { H2, H3, SPAN, P, LI, CLEARFIX } from '../../layouts/resume-layout/styles';

export const WRAPPER = styled(SPAN)`
	font-size: ${props => props.textSize};
`;

export const TEXT = styled(SPAN)`
	font-size: inherit;
`;

export const ICON_WRAPPER = styled(SPAN)`
	display: inline-block;
	font-size: inherit;
	text-align: center;
	width: 1.75em;
`;

export const ICON = styled(FontAwesomeIcon)`
	width: 1.25em;
	height: 100%;
`;
