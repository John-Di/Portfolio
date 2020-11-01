import styled from 'styled-components';
import { rhythm } from "../../utils/typography"

export const Layout = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: ${rhythm(0.5)};

	&::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
	}

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const Trigger = styled.div`
	position: relative;

	summary::-webkit-details-marker {
		display: none;
	}		
`;

export const ParentTrigger = styled(Trigger)`
	'marginTop': 0,
	'cursor': 'pointer'
`;

export const ChildTrigger = styled(Trigger)`
	'cursor': 'pointer',
	'margin': 0 auto ${rhythm(0.75)},
	'width': '100%'
`;
