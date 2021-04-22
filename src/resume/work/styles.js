import styled from 'styled-components';
import { device } from '../../utils/variables';

export const INFO = styled.div`
	margin-bottom: 1em;
	line-height: 1.1;
`;


export const EMPLOYER = styled.p`
	font-size: 0.875em;
	font-weight: bold;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.1;
	margin-right: 0.5em;

	@media print, ${device.mobileXL} {
		display: inline-block;
    font-size: 0.75em;
    line-height: 1.2833;
		margin-bottom: 0;
	}

	& + span {
    align-items: center;
		display: inline-flex;
		flex-flow: row nowrap;

		@media print, ${device.max_mobileXL} {
			margin-top: 0.5em;
		}
	}
`;

export const TOGGLE = styled.h3`
	display: flex;
	flex-flow: column nowrap;
	font-size: 0.75em;
	line-height: 1.1;
	margin: 0;
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

export const DURATION = styled.span`
  margin: 0;
  line-height: inherit;
  margin-right: 0.25em;
  font-size: 0.875em;
  position: relative;
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

export const DUTY = styled.li`
  font-size: 0.75em;
  margin: 1em 0;
  line-height: 1.75;
`;

export const CAREER = styled.ul`
	margin-left: 0;
	list-style-position: outside;
`;

export const DATE = styled.span`
  margin-left: 0;
  line-height: inherit;
  position: relative;
  display: inline-block;
`;
