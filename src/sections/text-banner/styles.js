import styled from 'styled-components';
import { device } from '../../utils/variables';
import { BANNER } from '../../components/banner/styles';

export const TEXT_BANNER = styled(BANNER)`
	width: 100%;
	height: 50vh;
	flex: 1 100%;
	max-width: 100%;
	padding: 0;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;

	p {
		@media ${device.mobileL} {
			font-size: 32px;
			line-height: 1.25;
		}

		@media ${device.laptop} {
			font-size: 44px;
			line-height: 1.25;
		}

		@media ${device.laptopL} {
			font-size: 60px
	}
`;
