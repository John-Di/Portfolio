import styled from 'styled-components';

export const HR = styled.hr`
	margin: 0;
`;

export const SOCIAL_LIST = styled.ul`
	list-style: none;
	text-align: center;
	line-height: 1;
	margin: 0;
	padding: 0.9375em 0 0.65625em;

	@media print { 
		display: none;
	}

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const SOCIAL = styled.li`
	line-height: 1;
	margin: 0;
	display: inline-block;
	padding: 0 0.65625em;
`;
