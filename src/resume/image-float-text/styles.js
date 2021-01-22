import styled from 'styled-components';
import { device } from '../../utils/variables';

const CLEARFIX = `
	&::after {
		content: '';
		display: table;
		clear: both;
	}
`;

export const IMAGEFLOATTEXT = styled.div`
	width: 100%;
	padding: 1em 0;

	@media ${device.mobileL} {
		padding: 0 1.5em;
	}


	${CLEARFIX}
`;

export const CONTENT = styled.div`
	flex: 1 auto;
	@media ${device.tablet} {
		display: flex;
		flex-flow: column nowrap;
		margin-right: 12em;
		padding: 0;
	}
`;


export const WRAPPER = styled.a`
	display: block;
	transition: opacity 0.3s ease 0s;
	max-width: 10em;
	width: 33.3333%;
	margin: 1em auto 2em;
	@media print {
		display: none;
	}

	@media ${device.mobileXL} {
		float: right;
		width: 150px;
		flex: 1 0 150px;
		margin: 1em 1em 2em 4em;

		${CLEARFIX}
	}

	@media ${device.desktop} {
		width: 150px;
		flex: 1 0 150px;
	}

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		max-width: 100%;

	}
`;
