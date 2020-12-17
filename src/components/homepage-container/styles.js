import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const CONTAINER = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: auto;
	max-width: ${props => props.maxWidth};	

	@media ${device.laptop} {
		flex-direction: row;
		flex-wrap: ${props => props.children && (props.children.length > 4 ? 'wrap' : 'nowrap')};
	}
	${CLEARFIX}
`;
