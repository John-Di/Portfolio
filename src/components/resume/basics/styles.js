import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';

export const BASICS = styled.section`
	background: white;
	text-align: center;
	border-radius: 1em;
	white-space: nowrap;
	padding: ${rhythm(1)};
	width: 100%;
	max-width: 30em;
	margin: 0 auto ${rhythm(1)};

	@media ${device.laptop} { 
		position: fixed;
		margin: 0;
	}

	@media print {
		margin: 0 auto ${rhythm(1)};
		position: relative;

		.Collapsible {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			max-height: ${rhythm(15)};
		}
	}

	.Collapsible__trigger {
		@media ${device.laptop} { 
			cursor: auto !important;
		}
	}

	.Collapsible__trigger-icon {
		position: absolute;
		right: 1em;
		height: ${rhythm(1.5)};
		width: ${rhythm(1.5)};
		top: ${rhythm(0.5)};
		display: block;
		transition: transform 300ms;

		@media print, ${device.laptop} { 
			display: none;
		}
	}

	.Collapsible__contentOuter {

		@media ${device.laptop} { 
			height: auto !important;
		}
	}
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
`
