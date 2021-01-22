import styled from 'styled-components';
import { device } from '../../utils/variables';

export const TYPE = styled.span`
	margin: 0;
	line-height: inherit;
	position: relative;
	margin-left: auto;
`;

export const TOGGLE = styled.h3`
	font-size: 0.8125em;
	margin: 0;
	line-height: 1.1;
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

export const TOGGLE_NAME = styled.h2`
	font-size: 1em;
	line-height: 1.1;
	display: inline-block;
	font-size: 0.875em;
	margin-top: 0.625em 0 0.625em;
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

export const DESCRIPTION = styled.p`
	font-size: 0.75em;
	line-height: 1.75;
	margin: 0;

	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const DUTY = styled.li`
	font-size: 0.75em;
	margin: 1em 0;
	line-height: 1.75;
`;

export const DUTIES = styled.ul`
	list-style-position: outside;
	margin: 0;
	padding-left: 1em;
`;

export const HR = styled.hr`
	margin: 1.3125em 5em 1.3125em 0;
`;

export const PROJECT_HIGHLIGHTS = styled.ul`
	margin: 0;
`;

export const PROJECT_KEYWORDS = styled.ul`
	display: inline-block;
	list-style: none;
	line-height: 1;
	padding: 0;
	margin: 0;
	white-space: pre-wrap;
	list-style-position: outside;
	margin-top: 0.875em;

	@media ${device.laptop} {
		margin-top: 1.625em;
	}
`;

export const PROJECT_KEYWORD = styled.li`
	display: inline-block;
	font-size: 0.75em;
	margin-right: 0.25em;
	margin-bottom: calc(1.3125em / 2);
	padding: 0.5em;
	background: #1975ca;
	color: white;
	border-radius: 0.25em;
`;
