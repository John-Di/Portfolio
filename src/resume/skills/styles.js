import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { SPAN } from '../../../layouts/resume-layout/styles';

export const CATEGORY = styled(SPAN)`
	font-size: 0.875em;
`;

export const HR = styled.hr`
	margin: 0;
`;

export const SKILL_LIST = styled.ul`
	list-style: none;
	line-height: 1;
	margin: 0;
	padding: 0.9375em 0 0.65625em;

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
