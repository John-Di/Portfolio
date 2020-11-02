import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';

export const TOGGLE_NAME = styled.h3`
	display: inline-block;
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
	&::before {
		content: '-';
	}
`;

export const PROJECT = styled.div`
	max-width: 100%;
	flex: 1 100%;
	padding: 0;

	@media ${device.laptop} { 
		padding: ${rhythm(0.75)} ${rhythm(1.25)};
	}

	.Collapsible {
		width: 100%;
		margin-top: ${rhythm(0.5)};
		padding-left: ${rhythm(0.5)};

		@media ${device.laptop} { 
			margin-top: 0;
			padding-left: ${rhythm(0.75)};
		}
	}

`;

export const IMAGE_WRAPPER = styled.a`
	display: block;
	float: left;
	width: 80px;
	height: 80px;
	margin-top: ${rhythm(0.25)};
	margin-right: ${rhythm(0.5)};
	margin-bottom: ${rhythm(0.25)};
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
		margin-right: ${rhythm(1.25)};
		margin-bottom: ${rhythm(1.25)};
	}
`;

export const PROJECT_DESC = styled.div`
	margin-top: 0;
	margin-bottom: ${rhythm(0.25)};

	@media ${device.laptop} { 
		margin-top: ${rhythm(1.25)};
		margin-bottom: 0;	
	}

	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const PROJECT_HIGHLIGHTS = styled.ul`
	padding-left: ${rhythm(0.75)};
	margin: 0;

	@media ${device.laptop} { 
		padding-left: ${rhythm(1.25)};
	}
`;

export const PROJECT_KEYWORDS = styled.ul`
	margin: 0;
	padding-left: 0;
	margin-top: ${rhythm(0.25)};

	@media ${device.laptop} { 
		padding-left: ${rhythm(1.25)};
		margin-top: ${rhythm(1.25)};
	}
`;

export const PROJECT_KEYWORD = styled.li`
	display: inline-block;
	margin-right: 0.25em;
	padding: 0.1em 0.25em;
	background: #1975ca;
	color: white;
	border-radius: 0.125em;
	margin-bottom: ${rhythm(0.25)};

	@media ${device.laptop} { 
		padding: 0.2em 0.5em;
		margin-bottom: ${rhythm(0.75)};
	}
`;
