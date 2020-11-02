import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from '../../../utils/variables';

export const P = styled.p`
	margin: 0 auto;
	width: 100%;
`;

export const TOGGLE = styled.div`
	display: flex;
	flex-flow: column nowrap;

	@media ${device.laptop} { 
		flex-flow: row nowrap;
	}
`;

export const TOGGLE_NAME = styled.h3`
	display: inline-block;
`;

export const TOGGLE_ICON = styled.h3`
	display: inline-block;
	margin-right: 0.25em;
	position: relative;
`;

export const TOGGLE_DURATION = styled.span`
	margin-left: 0;

	@media ${device.laptop} { 
		display: block;
		margin-left: ${rhythm(0.5)};
	}
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;

export const CAREER = styled.ul`
	padding-left: ${rhythm(1.25)};
`;
