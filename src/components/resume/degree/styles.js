import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rhythm } from "../../../utils/typography";

export const DEGREE = styled.section`
	margin-bottom: ${rhythm(0.75)};
`;

export const NAME = styled.h3`
	display: inline-block;
	"margin": 0 auto ${rhythm(0.75)};
	"width": "100%";
`;

export const DURATION_WRAPPER = styled.span`
	margin-left: 1em;
	margin-right: 0.25em;
	position: relative;
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
