import styled from 'styled-components';

export const WRAPPER = styled.div`
	&:not(:first-child):not(:last-child) {
		margin: 1.375em 0;
	}

	@media print {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const HEADING = styled.h2`
	font-size: 1em;
	margin: 0;
	line-height: 1.1;
`;

export const INNER = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
