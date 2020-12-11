import styled from 'styled-components';
import { rhythm } from "../../utils/typography"

export const Trigger = styled.div`
	position: relative;
	cursor: pointer;
	padding: 0.625em 0;

	summary::-webkit-details-marker {
		display: none;
	}		
`;

export const ParentTrigger = styled(Trigger)`
	marginTop: 0;
`;

export const PARENT_TRIGGER = {
	'marginTop': 0,
	'cursor': 'pointer'
};

export const ChildTrigger = styled(Trigger)`
	margin: 0 auto 0.984375em;
	width: 100%;
`;
