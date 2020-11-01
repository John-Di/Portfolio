import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";

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
