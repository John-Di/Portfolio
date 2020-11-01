import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";

export const HR = styled.hr`
	margin: ${rhythm(1)} 0 ${rhythm(0.75)};
`;

export const SKILL_LIST = styled.ul`
	list-style: none;
	line-height: 1;
	margin: 0;
	padding: 0 ${rhythm(0.5)};

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const SKILL = styled.li`
	line-height: 1;
	margin: 0.5em 0;
	text-align: left;
`;

export const KEYWORDS = styled.ul`
	list-style: none;
	line-height: 1;
	display: inline-block;
	margin: 0;
	margin-top: 1em;
	white-space: pre-wrap;
`;

export const KEYWORD = styled.li`
	display: inline-block;
	margin-right: 0.25em;
	padding: 0.5em;
	background: #1975ca;
	color: white;
	border-radius: 0.25em;
`;
