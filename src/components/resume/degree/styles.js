import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';

export const DEGREE = styled.section`
	margin-bottom: ${rhythm(0.75)};
`;

export const TOGGLE = styled.div`
	display: flex;
	flex-flow: column nowrap;

	@media ${device.laptop} { 
		flex-flow: row nowrap;
	}
`;

export const NAME = styled.h3`
	display: inline-block;
	"margin": 0 auto ${rhythm(0.75)};
	"width": "100%";
`;

export const DEGREE_DESC = styled.div`
	margin-top: ${rhythm(0.25)};
	padding-left: ${rhythm(0.75)};
`;

export const DURATION_WRAPPER = styled.div`
	margin-right: 0.25em;
	position: relative;
	margin-top: ${rhythm(0.5)};
	padding-left: ${rhythm(0.75)};
`;

export const DURATION = styled.span`
	margin-left: 0.5em;
	margin-right: 0.25em;
	position: relative;
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;
