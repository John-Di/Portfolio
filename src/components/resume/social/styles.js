import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";

export const HR = styled.hr`
	margin: 0.65625em 0 0.984375em;
`;

export const SOCIAL_LIST = styled.ul`
	list-style: none;
	text-align: center;
	line-height: 1;
	margin: 0;

	@media print { 
		display: none;
	}

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const SOCIAL = styled.li`
	line-height: 1;
	margin: 0;
	display: inline-block;
	padding: 0 0.65625em;
`;
