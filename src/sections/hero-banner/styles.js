import styled from 'styled-components';
import { device } from '../../utils/variables';
import { BANNER } from '../../components/banner/styles';
import {
	LOG_IT,
	BACKGROUND_PSEUDO,
	SQUARE_BACKGROUND
} from '../../utils/mixins';
import {
	idealTextColor
} from '../../utils/randoms';

export const HERO_BANNER = styled(BANNER)`
	height: 100vh;
	width: 100%;
	flex: 1 100%;
	max-width: 100%;
	padding: 0;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;

	${props => props.backgroundColor ? `
		color: ${idealTextColor(props.backgroundColor)}
	` : ''};
	${props => RESPONSIVE_SQUARING(props)}

	&::before {
		padding-top: 0;
		flex: 0 75%;	
	}

	@media ${device.tablet} {
		flex-direction: row;

		&::before {
			flex: 1 100%;	
			max-width: 50%;
		}
	}

	h2 {
			font-size: 22px;
			line-height: 1.25;

		@media ${device.tablet} {
			font-size: 24px;
			line-height: 1.25;
		}

		@media ${device.laptop} {
			font-size: 32px;
		}
	}

	p {
		@media ${device.mobileL} {
			font-size: 32px;
			line-height: 1.25;
		}

		@media ${device.laptop} {
			font-size: 54px;
			line-height: 1.25;
		}

		@media ${device.laptopL} {
			font-size: 72px;
		}
	}
`;


const RESPONSIVE_SQUARING = ({ squareImage, backgroundColor, backgroundImage }) => squareImage ? SQUARE_BACKGROUND(backgroundColor, backgroundImage) : BACKGROUND_PSEUDO(backgroundColor, backgroundImage)
