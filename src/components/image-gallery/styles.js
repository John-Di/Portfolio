import styled from 'styled-components';
import { size, device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';
import {
	LOG_IT,
	SQUARE_BACKGROUND
} from '../../utils/mixins';

const gap = 0.25;

export const WRAPPER = styled.div`
	height: 100%;
	width: 100%;
	margin: 0 auto;
	max-width: ${size.tablet}px;

	@media ${device.tablet} {
		margin: 8em auto;
	}
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

	@media ${device.tablet} {
		margin: 2em -${gap}em 0;
	}

	${CLEARFIX}

	@supports not (display:grid) {
	}
`;

export const MAIN_IMAGE = styled.div`
	grid-area: a;
	${SQUARE_BACKGROUND()}
`;

export const SCROLLABLE = styled.div`
	width: 100%;
	overflow: auto;
	white-space: nowrap;

	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
	
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const THUMBNAIL = styled.button`
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;
	background: none;
	cursor: pointer;
	grid-area: b;
	margin: 0;
	max-width: ${props => props.maxWidth}%;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
	overflow: hidden;
	${SQUARE_BACKGROUND('#d4d4d4')}

	@media ${device.tablet} {
		border: 2px solid transparent;
		margin: 0 ${gap}em;
		max-width: calc(${props => props.maxWidth}% - ${gap * 2}em);

		&.current,
		&:hover,
		&:focus {
			border: 2px solid #000000;
		}
	}

	&:not(.current) img {
		${props => props.transparency ? `opacity : ${props.transparency};` : ''}
	}

	&:hover { 
		img {
			transform: scale(1.25);
		}
	}	

	&:not(.current):hover { 
		img {
			opacity: 1;
		}
	}	
`

export const IMG = styled.img`
	display: block;
	max-width: 100%;
	vertical-align: bottom;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	height: 100%;
	transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;
`
