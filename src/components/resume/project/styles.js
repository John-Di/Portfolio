import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';
import {
	H2,
	DIVIDER,
	KEYWORDS,
	KEYWORD
} from '../../../layouts/resume-layout/styles';

export const TOGGLE_NAME = styled(H2)`
	display: inline-block;
	font-size: 0.875em;
	margin-top: 0.625em;
	margin-bottom: 0.625em;
`;

export const TOGGLE_ICON = styled.span`
	display: inline-block;

	&::before {
		content: '';
		padding: 0 0.5em;
		height: 100%;
		display: inline-block;
	}
`;

export const TOGGLE_ICON_DASH = styled(TOGGLE_ICON)`
	font-size: 0.875em;
	&::before {
		content: '-';
	}
`;

export const PROJECT = styled.div`
	max-width: 100%;
	flex: 1 100%;
	padding: 0;

	@media ${device.laptop} { 
		padding: 0.984375em 1.640625em;
	}

	.Collapsible {
		width: 100%;
		margin-top: 0.65625em;
		padding-left: 0.65625em;

		@media ${device.laptop} { 
			margin-top: 0;
			padding-left: 0.984375em;
		}
	}

`;

export const IMAGE_WRAPPER = styled.a`
	display: block;
	float: left;
	width: 80px;
	height: 80px;
	margin-top: 0.328125em;
	margin-right: 0.65625em;
	margin-bottom: 0.328125em;
	transition: opacity 0.3s ease 0s;

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		border-radius: 20%;
	}

	@media ${device.laptop} { 
		float: left;
		width: 200px;
		height: 200px;
		margin-top: 0;
		margin-right: 1.640625em;
		margin-bottom: 1.640625em;
	}
`;

export const PROJECT_DESC = styled.div`
	margin-top: 0;
	margin-bottom: 0.328125em;

	@media ${device.laptop} { 
		margin-top: 1.640625em;
		margin-bottom: 0;	
	}

	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const HR = styled(DIVIDER)`
	margin-right: 5em;
	margin-top: 1.3125em;
`;

export const PROJECT_HIGHLIGHTS = styled.ul`
	padding-left: 0.984375em;
	margin: 0;

	@media ${device.laptop} { 
		padding-left: 1.640625em;
	}
`;

export const PROJECT_KEYWORDS = styled(KEYWORDS)`
	margin: 0;
`;

// styled.ul`
// 	margin: 0;
// 	padding-left: 0;
// 	margin-top: 0.328125em;

// 	@media ${device.laptop} { 
// 		padding-left: 1.640625em;
// 		margin-top: 1.640625em;
// 	}
// `;

export const PROJECT_KEYWORD = KEYWORD;
// styled.li`
// 	display: inline-block;
// 	margin-right: 0.25em;
// 	padding: 0.1em 0.25em;
// 	background: #1975ca;
// 	color: white;
// 	border-radius: 0.125em;
// 	margin-bottom: 0.328125em;

// 	@media ${device.laptop} { 
// 		padding: 0.2em 0.5em;
// 		margin-bottom: 0.984375em;
// 	}
// `;
