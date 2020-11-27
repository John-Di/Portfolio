import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from '../../../utils/variables';
import { H2, H3, SPAN, P, LI, CLEARFIX } from '../../../layouts/resume-layout/styles';
import { WRAPPER } from '../../duration/styles';

export const DUTY = LI;

export const INNER = styled.div`
	padding: 1em 0;

	@media ${device.mobileL} {
		padding: 0.5em 1.5em;
	}

	${CLEARFIX}
`;

export const IMAGE_WRAPPER = styled.a`
	display: block;
	transition: opacity 0.3s ease 0s;
	max-width: 10em;
	width: 33.3333%;
	margin: 1em auto 2em;

	@media ${device.mobileXL} {
		float: right;
		width: 150px;
		flex: 1 0 150px;
		margin: 1em 1em 2em 4em;

		${CLEARFIX}
	}

	@media ${device.desktop} {
		flex: 1 0 60px;
		width: 60px;
	}

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		max-width: 100%;
	
	}
`;
export const DIV = styled.div`
	margin-bottom: 1em;
	line-height: 1.1;
`;


export const EMPLOYER = styled(P)`
	font-size: 0.875em;
	font-weight: bold;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.1;
	margin-bottom: 0.75em;
	margin-right: 1em;

	@media ${device.mobileXL} { 
		display: inline-block;
		margin-bottom: 0;
	}
`;

export const TOGGLE = styled(H3)`
	display: flex;
	flex-flow: column nowrap;
	font-size: 0.75em;
	padding-right: 2.5em;
	font-weight: normal;
	justify-content: center;

	@media ${device.max_mobileXL} {
		span > span:first-child {
			// display: none;
		}

		> span {
			display: block;
			line-height: 1.5;

			&:first-child {
				display: flex;
				flex-flow: row nowrap;
				align-items: start;
				padding-bottom: 0.5em;
			}

			&:last-child {
				margin-left: 2em;
			}
		}
	}

	@media ${device.mobileXL} { 
		font-size: 0.875em;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
`;

export const DURATION = styled(WRAPPER)`
	margin-left: auto;
`;

export const TOGGLE_NAME = styled(SPAN)`
	font-size: 1em;
	display: inline-block;
	line-height: 1.1;
	margin-left: 0.5em;
	margin-bottom: 0.5em;

	@media ${device.tablet} {
		margin-bottom: 0;
		min-width: 33.3333%;
	}
`;

export const TOGGLE_ICON = styled.span`
	display: inline-block;
	margin-right: 0.25em;
	position: relative;
`;

export const TOGGLE_DURATION = styled.span`
	margin-left: 0;

	@media ${device.tablet} { 
		display: block;
		margin-left: 0.65625em;
	}
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;

export const CAREER = styled.ul`
	margin-left: 0;
	list-style-position: outside;

`;

export const CONTENT = styled.div`
	flex: 1 auto;

	@media ${device.tablet} {
		padding: 0;
	}
`;


export const DATE = styled(WRAPPER)`
	margin-left: 0.75em;
	font-size: 0.75em;
	
	@media ${device.max_tablet} {
		display: inline-flex;
		flex-flow: column nowrap;
	}
`;

export const ICON_TEXT = styled(SPAN)`
	font-size: 0.875em;
	margin: 0;
`;

export const ICON_WRAPPER = styled(SPAN)`
	display: inline-block;
	min-width: 1.5em;
	text-align: center;
`;

export const DATE_ICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 1.25em;
`;
