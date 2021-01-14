import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/IdealTextColor';


export const ARTICLE = styled.article`
	margin: 0 auto;
	width: 100%;
	flex-grow: 1;
`;

export const CONTAINER = styled.div`
	max-width: 100%;
	width: 100%;

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	`};

	${props => props.cols && `
		flex: 1 100%;
		display: block;
		
		@media ${device.mobileXL} {
			float: left;
			display: inline-block;
		}

		@media ${device.tablet} {
			max-width: ${100 / props.cols}%;
		}
	`};
	
	${props => props.backgroundImage && `
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		padding: 0;

		@media ${device.mobileXL} {
			display: inline-flex;
			flex-direction: row;
			align-items: stretch;
		}

		@media ${device.max_tablet} {
			flex-direction: row${props.reversed ? `-reverse` : ``};
		}
		
		&::${props.image_first ? `before` : `after`} {
			content: '';
			background-image: url('${props.backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			padding-top: 100%;
			width: 100%;
		}
	`};
`;

export const CONTENT = styled.div`
	padding: 2em 1em;
	flex: 1 auto;

	@media ${device.mobileXL} {
		padding: 2em 4%;
	}

	${props => props.withMedia && `
		width: 100%;
	`};
`;
