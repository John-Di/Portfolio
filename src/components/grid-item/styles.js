import styled from 'styled-components';
import { device } from '../../utils/variables';

export const GRID_ITEM = styled.div`
	max-width: 100%;

	@media ${device.tablet} {
		width: 100%;
		
		@supports not (display:grid) {
			float: left;
			display: inline-block;
			max-width: ${props => props.maxWidth}%;
		}
	}
`
