import styled from 'styled-components';
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';
import { H1 } from '../../layouts/resume-layout/styles';

export const BASICS = styled.section`
	background: white;
	text-align: center;
	border-radius: 1em;
	white-space: nowrap;
	padding: 1.3125em;
	width: 100%;
	max-width: 22em;
	margin: 0 auto 1.3125em;

	@media print { 
		margin: 0 auto;
		padding: 0;
	}

	@media ${device.laptop} { 
		position: fixed;
		margin: 0;
	}

	@media print {
		margin: 0 auto 1.3125em;
		position: relative;

		.Collapsible {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			max-height: 19.6875em;
		}
	}

	.Collapsible--basics .Collapsible__trigger {
		@media ${device.laptop} { 
			cursor: auto !important;
		}
	}

	.Collapsible__trigger-icon {
		position: absolute;
		right: 1em;
		height: 1.96875em;
		width: 1.96875em;
		top: 0.65625em;
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

export const NAME = styled(H1)`
	margin-top: 1.3125em;
`;

export const ROLES = styled.p`
	font-size: 0.875em;
	margin: 1em 0 0;
`
export const PRINT = styled.button`
	display: none;
	border: 2px solid white;
	margin: 0;
	cursor: pointer;
	padding: 0.5em;
	background: #1975ca;
	color: white;
	border-radius: 0.25em;
	width: 10em;
	position: absolute;
	bottom: -4em;
	left: 50%;
	transform: translateX(-50%);
	
	&:hover {
		opacity: 0.8;
	}

	@media ${device.laptop} {
		display: block;
	}

	@media print {
		display: none;
	}
`;
