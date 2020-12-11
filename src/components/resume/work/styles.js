import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from '../../../utils/variables';
import { H2, H3, SPAN, P, LI, CLEARFIX } from '../../../layouts/resume-layout/styles';
import { WRAPPER } from '../../duration/styles';

export const INNER = styled.div`
	${CLEARFIX}
`;

export const INFO = styled.div`
	margin-bottom: 1em;
	line-height: 1.1;
`;


export const EMPLOYER = styled(P)`
	font-size: 0.875em;
	font-weight: bold;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.1;
	margin-right: 0.5em;

	@media print, ${device.mobileXL} { 
		display: inline-block;
		margin-bottom: 0;
	}

	& + span {
		display: inline-flex;
		flex-flow: row nowrap;

		@media print, ${device.max_mobileXL} {
			margin-top: 0.5em;
		}
	}
`;

export const TOGGLE = styled(H3)`
	display: flex;
	flex-flow: column nowrap;
	font-size: 0.75em;
	padding-right: 3.25em;
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
				margin-bottom: 0.5em;
			}

			&:last-child {
				display: inline-block;
				margin-left: 1em;
			}
		}
	}

	@media ${device.mobileXL} { 
		font-size: 0.875em;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	@media print { 
		justify-content: flex-start;
		flex-flow: row nowrap;
	}
`;

export const DURATION = styled(WRAPPER)`
	margin-left: auto;

	@media print {
		display: inline-block;
		margin-left: 2em;

		&::before {
			content: '(';
		}

		&::after {
			content: ')';
		}
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

export const DUTY = LI;

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


export const DATE = WRAPPER;
