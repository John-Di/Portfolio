import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { size } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';
import {
	LOG_IT,
	SQUARE_BACKGROUND
} from '../../utils/mixins';

export const WRAPPER = styled.div`
	height: 100%;
	width: 100%;
	margin: auto;
	max-width: ${size.tablet}px;
`;

export const GALLERY = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	
	${CLEARFIX}
	@supports not (display:grid) {
	}
`;

export const NAVIGATION = styled.div`
	margin: 2em -0.25em 0;

	${CLEARFIX}

	@supports not (display:grid) {
	}
`;

export const SCROLLABLE = styled.div`
	width: 100%;
	overflow: auto;
	white-space: nowrap;
	
	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}
	
	/* Hide scrollbar for IE, Edge and Firefox */
	& {
	  -ms-overflow-style: none;  /* IE and Edge */
	  scrollbar-width: none;  /* Firefox */
	}
`;

export const MAIN_IMAGE = styled.div`
	grid-area: a;
	background: red;
	${SQUARE_BACKGROUND()}
`
export const THUMBNAIL = styled.button`
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	cursor: pointer;
	grid-area: b;
	margin: 0 0.25em;
	max-width: calc(20% - 0.5em);
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`

export const IMG = styled.div`
	background: blue;
	width: 100%;
	padding-top: 100%;
`
