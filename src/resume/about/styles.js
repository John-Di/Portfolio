import styled from 'styled-components';
import { device } from '../../utils/variables';

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
	border-radius: 0.75em;
	margin-bottom: 3.28125em;
	padding: 0.875em 1.25em;

	@media ${device.laptop} {
		max-width: calc(100% - 24em);
		padding: 2em;
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
		padding: 0;
	}

	> .Collapsible .Collapsible {
		padding: 0;
	}
`;
