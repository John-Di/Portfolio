import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	LOG_IT,
	SQUARE_BACKGROUND
} from '../../utils/mixins';
import {
	idealTextColor
} from '../../utils/randoms';

export const TEXT_MEDIA_BLOCK = styled.div`
	${props => props.backgroundColor ? `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	` : ''};
	${props => responsive_layout(props)};
`;


let responsive_layout = ({ cols = 1, backgroundColor, backgroundImage, image_left = true, image_above = true }) => `
	width: 100%;
	flex: 1 100%;
	max-width: 100%;
	padding: 0;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	${SQUARE_BACKGROUND(backgroundColor, backgroundImage)}

	${ADJACENT(`${device.mobileL} and ${device.max_tablet}`, image_left)}
	${COLUMN_STACKED(`${device.tablet} and ${device.max_laptop}`, image_above)}
	${COLUMN_STACKED(`${device.laptop} and ${device.max_desktop}`, image_above)}
	${ADJACENT(`${device.desktop}`, image_above)}
`;

const COLUMN_STACKED = (resolution, image_above) => `
	@media ${resolution} {
		flex-direction: ${!image_above ? 'column-reverse' : 'column'};
		max-width: 100%;
	}
`;

const ADJACENT = (resolution, image_left) => `
	@media ${resolution} {
		flex-direction: ${!image_left ? 'row-reverse' : 'row'};

		&::before {
			padding-top: 50%;
			max-width: 50%;
		}
	}
`;
