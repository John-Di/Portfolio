import styled from 'styled-components';

const H2 = styled.h2`
	font-size: 1em;
	margin: 0;
	line-height: 1.1;
`;

const DIVIDER = styled.hr`
	margin: 0.875em 5em 1.3125em 0;
`;

export const HEADING = H2;
export const HR = DIVIDER;

export const DEGREES = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
