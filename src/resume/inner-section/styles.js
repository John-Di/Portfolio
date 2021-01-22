import styled from 'styled-components';

const H3 = styled.h3`
	font-size: 0.8125em;
	margin: 0;
	line-height: 1.1;
`;

export const WRAPPER = styled.div`
	width: 100%;

	&:not(:first-child):not(:last-child) {
		margin: 0.5em 0;
	}
`;

export const HEADING = H3;

export const INNER = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
