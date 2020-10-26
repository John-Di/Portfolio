import styled from 'styled-components';
import { rhythm } from "../../../utils/typography"

export const P = styled.p`
	margin: 0 auto;
	width: 100%;
`;

export const ParentTrigger = {
	'marginTop': 0,
	'cursor': 'pointer'
};

export const ChildTrigger = {
	"cursor": "pointer",
	"margin": `0 auto ${rhythm(0.75)}`,
	"width": "100%"
};
