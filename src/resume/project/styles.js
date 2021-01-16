import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';
import {
	H2,
	H3,
	DIVIDER,
	KEYWORDS,
	KEYWORD,
	P,
	SPAN,
	UL,
	LI
} from '../../../layouts/resume-layout/styles';

export const TYPE = styled(SPAN)`
	position: relative;
	margin-left: auto;
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
				margin-left: 0;
				@media ${device.mobileXL} {
					margin-left: 2.5em;
				}

				@media print {
					display: inline-block;
					margin-left: 1em;
					&::before {
						content: '(';
					}
			
					&::after {
						content: ')';
					}
				}
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

export const TOGGLE_NAME = styled(H2)`
	display: inline-block;
	font-size: 0.875em;
	margin-top: 0.625em;
	margin-bottom: 0.625em;
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

export const TOGGLE_ICON_DASH = styled(TOGGLE_ICON)`
	font-size: 0.875em;
	&::before {
		content: '-';
	}
`;

export const PROJECT = styled.div`
	max-width: 100%;
	flex: 1 100%;
	padding: 0;
`;

export const IMAGE_WRAPPER = styled.a`
	display: block;
	float: left;
	width: 80px;
	height: 80px;
	margin-top: 0.3125em;
	margin-right: 0.625em;
	margin-bottom: 0.3125em;
	transition: opacity 0.3s ease 0s;

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		border-radius: 20%;
	}

	@media ${device.laptop} { 
		float: left;
		width: 200px;
		height: 200px;
		margin-top: 0;
		margin-right: 1.625em;
		margin-bottom: 1.625em;
	}
`;

export const DESCRIPTION = styled(P)`
	margin: 0;
	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const DUTY = LI;

export const DUTIES = styled.ul`
	list-style-position: outside;
	margin: 0;
	padding-left: 1em;
`;

export const HR = styled(DIVIDER)`
	margin-right: 5em;
	margin-top: 1.3125em;
`;

export const PROJECT_HIGHLIGHTS = styled.ul`
	margin: 0;
`;

export const PROJECT_KEYWORDS = styled(KEYWORDS)`
	padding-left: 0;
	margin-top: 0.875em;
`;

// styled.ul`
// 	margin: 0;
// 	padding-left: 0;
// 	margin-top: 0.328125em;

// 	@media ${device.laptop} { 
// 		padding-left: 1.625em;
// 		margin-top: 1.625em;
// 	}
// `;

export const PROJECT_KEYWORD = KEYWORD;
// styled.li`
// 	display: inline-block;
// 	margin-right: 0.25em;
// 	padding: 0.1em 0.25em;
// 	background: #1975ca;
// 	color: white;
// 	border-radius: 0.125em;
// 	margin-bottom: 0.328125em;

// 	@media ${device.laptop} { 
// 		padding: 0.2em 0.5em;
// 		margin-bottom: 0.984375em;
// 	}
// `;
