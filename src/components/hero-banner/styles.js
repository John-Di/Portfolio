import styled from 'styled-components';
import { device } from '../../utils/variables';
import { SECTION } from '../../sections/section/styles';

SECTION.hasPadding = false;
export const BANNER = styled(SECTION)`
	min-height: 100vh;

	p {
		@media ${device.tablet} {
			font-size: 72px;
		}

		@media ${device.laptop} {
			font-size: 98px;
		}
	}
`;
