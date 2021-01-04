import styled from 'styled-components';
import { device } from '../../utils/variables';
import { BANNER } from '../../components/banner/styles';

export const BASIC_BANNER = styled(BANNER)`
	min-height: 50vh;

	p {
		@media ${device.tablet} {
			font-size: 72px;
		}

		@media ${device.laptop} {
			font-size: 98px;
		}
	}
`;
