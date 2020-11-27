import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from '../../utils/variables';
import { H2, H3, SPAN, P, LI, CLEARFIX } from '../../layouts/resume-layout/styles';

export const WRAPPER = SPAN;

export const TEXT = styled(SPAN)`
	font-size: ${props => props.textSize};
`;

export const ICON_WRAPPER = styled(SPAN)`
	display: inline-block;
	text-align: center;
	margin-right: ${props => props.gap.regular};

	${props => props.gap.resp ?
		`@media ${device[props.gap.resp.device]} {
			margin-right: ${props.gap.resp.value};
		}` : ''}
`;

export const ICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 1.25em;
`;
