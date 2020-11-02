import styled from 'styled-components';
import { device } from '../../../utils/variables';

export const HR = styled.hr`
	margin-right: auto;

	@media ${device.laptop} { 
		max-width: 50%;;
	}
`;
