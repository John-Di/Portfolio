import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/randoms';
import {
	BACKGROUND_PSEUDO,
	SQUARE_BACKGROUND
} from '../../utils/mixins';


export const BLOCK = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex: 1 auto;
	position: relative;

	${props => props.backgroundColor && `
		color: ${idealTextColor(props.backgroundColor)}
	`};

	@media ${device.laptop} {
		padding-top: 0;
		justify-content: flex-start;
		align-items: center;
	}

	${props => props.overlay && `
		&::before {
			content: '';
			display: inline-block;
			vertical-align: bottom;
			padding-top: 100%;
			width: 100%;
		}
	`|| ``}
`;

export const CONTAINER = styled.div`
	flex: 1 auto;
	width: 100%;
	max-width: 1440px;
	padding: 0 8%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;

	${props => props.overlay && `
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;	
	`|| ``}
`;

export const CONTENT = styled.div`
	padding: 0;
	color: ${props => props.textColor};
`;