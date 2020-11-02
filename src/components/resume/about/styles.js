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

export const SECTION = styled.section`
	background: white;
	margin: 0;
	margin-left: auto;
	width: 100%;
	max-width: 100%;
	border-radius: 1em;
	margin-bottom: ${rhythm(2.5)};

	padding: ${rhythm(0.5)} ${rhythm(0.5)};

	@media ${device.laptop} { 
		max-width: calc(100% - 32em);
		padding: ${rhythm(1.5)} ${rhythm(1.5)};
	}

	@media print {
		max-width: 100%;

		.Collapsible__trigger-icon {
			display: none;
		}

		.Collapsible__contentOuter {

			height: auto !important;
		}
	}

	> .Collapsible {
		padding: 0 ${rhythm(0.25)};

		@media ${device.laptop} { 
			padding: 0;
		}
	}

	> .Collapsible .Collapsible {
		padding: 0 ${rhythm(0.25)};

		@media ${device.laptop} { 
			padding: 0;
		}
	}
`;
