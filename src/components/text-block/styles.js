import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/randoms';
import {
	SQUARE
} from '../../utils/mixins';

export const TEXT_BLOCK = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	`};


	${props => props.isSquare ? `
		&::before {
			content: '';
			padding-top: 100%;
			width: 100%;
		}
	` : ''};	
	

	
	${props => props.backgroundImage && `
		flex: 1 100%;
		padding: 0;
	
		&::before {
			background-image: url('${props.backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}
	`};

	@media ${device.tablet} {
		text-align: left;
	}

	@media ${device.laptop} {
		justify-content: flex-start;
		align-items: center;
	}
`;

export const WRAPPER = styled.div`
	flex: 1 auto;
	width: 100%;
	max-width: 1440px;
	padding: 0 4%;
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const CONTENT = styled.div`
	padding: 0;
`;
