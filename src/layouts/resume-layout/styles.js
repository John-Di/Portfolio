import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';

export const Layout = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 0.7em;

	&::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(${props => props.background});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;

		@media print { 
			background: none;
		}
	}

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const CLEARFIX = `
	&::after {
		content: '';
		display: table;
		clear: both;
	}
`

export const H1 = styled.h1`
	font-size: 1.5em;
	margin: 2.2969em auto 0.5em;
	line-height: 1.1;
	// border-left-width: ${rhythm(0.5)};
	// border-right-width: ${rhythm(0.25)};
	// border-bottom-width: ${rhythm(0.5)};
	// border-top-width: ${rhythm(0.75)};
	// margin: ${rhythm(1)} ${rhythm(1.25)} ${rhythm(1.5)} ${rhythm(1.75)};
	// margin: ${rhythm(2)} ${rhythm(2.25)} ${rhythm(2.5)} ${rhythm(2.75)};
`;
export const H2 = styled.h2`
	font-size: 1em;
	margin: 2em auto 0.625em;
	line-height: 1.1;
`;
export const H3 = styled.h3`
	font-size: 0.8125em;
	margin: 0.6875em auto;
	line-height: 1.1;
`;
export const HR = styled.hr`
	margin: 0.875em 0 1.3125em;
`;
export const P = styled.p`
	font-size: 0.75em;
	margin: 1em 0;
	line-height: 1.3125;
`;
export const SPAN = styled.span`
	margin: 0;
	line-height: inherit;
`;
export const LI = styled.li`
	font-size: 0.75em;
	margin: 1em 0;
	line-height: 1.3125;
`;
export const KEYWORDS = styled.ul`
	list-style: none;
	line-height: 1;
	padding: 0;
	display: inline-block;
	margin: 0;
	margin-top: 1em;
	white-space: pre-wrap;

	margin: 0;
	padding-left: 0;
	margin-top: 0.328125em;

	@media ${device.laptop} { 
		padding-left: 1.640625em;
		margin-top: 1.640625em;
	}
`;

export const KEYWORD = styled.li`
	display: inline-block;
	font-size: 0.75em;
	margin-right: 0.25em;
	margin-bottom: calc(1.3125em / 2);
	padding: 0.5em;
	background: #1975ca;
	color: white;
	border-radius: 0.25em;
`;

export const DIVIDER = styled(HR)`
	margin-right: 5em;
`;
