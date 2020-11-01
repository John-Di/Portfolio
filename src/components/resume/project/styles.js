import styled from 'styled-components';
import { rhythm } from "../../../utils/typography"

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
	padding: ${rhythm(0.75)} ${rhythm(1.25)};

	.Collapsible {
		width: 100%;
	}
`;

export const IMAGE_WRAPPER = styled.a`
	display: block;
	float: left;
	width: 200px;
	height: 200px;
	margin-right: ${rhythm(1.25)};
	margin-bottom: ${rhythm(1.25)};
	transition: opacity 0.3s ease 0s;

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		border-radius: 2em;
	}
`;

export const PROJECT_DESC = styled.ul`
	margin-top: ${rhythm(1.25)};

	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const PROJECT_HIGHLIGHTS = styled.ul`
	padding-left: ${rhythm(1.25)};
`;

export const PROJECT_KEYWORDS = styled.ul`
	margin-top: ${rhythm(1.25)};
	margin-bottom: 0;
	padding-left: 0;
`;

export const PROJECT_KEYWORD = styled.li`
	display: inline-block;
	margin-right: 0.25em;
	padding: 0.2em 0.5em;
	background: #1975ca;
	color: white;
	border-radius: 0.25em;
`;
