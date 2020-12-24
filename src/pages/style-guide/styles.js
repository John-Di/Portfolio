import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/randoms';


export const ARTICLE = styled.article`
	margin: 0 auto;
	width: 100%;
	flex-grow: 1;
`;

export const CONTAINER = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	
	@media ${device.mobileXL} {
		flex-direction: row${props => props.reversed ? `-reverse` : ``};
		display: inline-flex;
		align-items: stretch;
	}
		
	@media ${device.laptop} {
		flex-direction: row;
	}

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	`};

	${props => props.cols && `
		flex: 1 100%;

		@media ${device.mobileXL} {
			float: left;
		}

		@media ${device.laptop} {
			max-width: ${100 / props.cols}%;
		}
	`};
	
	${props => props.backgroundImage && `
		display: flex;
		padding: 0;
		
		&::${props.image_first ? `before` : `after`} {
			content: '';
			background-image: url('${props.backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			padding-top: 100%;
			width: 100%;

			@media ${device.mobileXL} {
				flex: 1 50%;
				max-width: 50%;
				min-height: 100%;
				padding-top: 0;
			}
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

		@media ${device.mobileXL} {
			flex: 1 50%;
			max-width: 50%;
		}
	`};
`;
