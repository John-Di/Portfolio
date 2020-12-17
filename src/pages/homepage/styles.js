import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/random-colors';


export const ARTICLE = styled.article`
	margin: 0 auto;
	max-width: 100%;
`;

export const CONTAINER = styled.div`
	max-width: 100%;
	width: 100%;
	padding: 0 1em;

	@media ${device.laptop} {
		padding: 0 4%;
	}

	${props => props.bkcolor && `
		background-color: ${props.bkcolor};
		color: ${idealTextColor(props.bkcolor)}
	`};

	${props => props.cols && `
		flex: 1 100%;
		display: block;
		padding: 2em 1em;
		
		@media ${device.laptop} {
			float: left;
			padding: 2em 4%;
			display: inline-block;
			max-width: ${100 / props.cols}%;
		}
	`};
`;
