import styled from 'styled-components';
import { device } from '../../utils/variables';
import { SECTION } from '../../sections/section/styles';

SECTION.hasPadding = true;
export const BANNER = styled(SECTION)`
	max-width: 100%;
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
