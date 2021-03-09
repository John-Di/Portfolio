import styled from 'styled-components';
import { size, device } from '../../utils/variables';

export const CONTENT = styled.div`
	display: inline-block;
	flex: 1 100%;
	max-width: 100%;
	height: 100%;
	
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	@media screen and ${device.tablet} {
		flex: 1 50%;
		max-width: 50%;
		margin: 5em 0;
	}
`;
