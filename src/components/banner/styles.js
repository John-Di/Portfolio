import styled from 'styled-components';
import { device } from '../../utils/variables';
import { SECTION } from '../../sections/section/styles';

SECTION.hasPadding = true;
export const BANNER = styled(SECTION)`
	max-width: 100%;
	min-height: 50vh;
	
	text-align: ${props => props.textAlignment || 'center'};

	@media ${device.tablet} {
		text-align: ${props => props.textAlignment || 'left'};
	}

	p {
		@media ${device.mobileL} {
			line-height: 1.25;
		}
	}
`;

const log = (label, fn, { ...rest }) => {
	console.log(label, rest);
	return fn(rest);
}
