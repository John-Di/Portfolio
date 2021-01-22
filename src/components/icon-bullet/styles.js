import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WRAPPER = styled.span`
	margin: 0;
	line-height: inherit;
	font-size: ${props => props.textSize};
`;

export const TEXT = styled.span`
	margin: 0;
	line-height: inherit;
	font-size: inherit;
`;

export const ICON_WRAPPER = styled.span`
	margin: 0;
	line-height: inherit;
	display: inline-block;
	font-size: inherit;
	text-align: center;
	width: 1.75em;
`;

export const ICON = styled(FontAwesomeIcon)`
	width: 1.25em;
	height: 100%;
`;
