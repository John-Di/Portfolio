import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";

export const BASICS = styled.section`
	background: white;
	position: fixed;
	text-align: center;
	border-radius: 1em;
	margin: 0;
	white-space: nowrap;
	padding: ${rhythm(1)};
	max-width: 30em;
	width: 100%;
`;

export const IMAGE_WRAPPER = styled.div`
	border-radius: 50%;
	margin: 0 auto;
	max-width: 8em;
	overflow: hidden;
`;


export const H1 = styled.h1`
	margin-top: ${rhythm(1)}
`;

export const ROLES = styled.p`
	margin: ${rhythm(0.75)} 0 0;
`;
