import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const SECTION = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	width: 100%;
	max-width: ${props => props.maxWidth};

	${props => props.hasPadding && `
		padding: 0;
	
		@media ${device.laptop} {
			padding: 0 4%;
		}
	`};
	
	${props => props.background && `
		background-image: url('${props.background}');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	`};

	${props => props.bkcolor && `
		background-color: ${props.bkcolor};
	`};

	@media ${device.mobileXL} {
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media ${device.laptop} {
		flex-wrap: ${props => props.children && (props.children.length > 4 ? 'wrap' : 'nowrap')};
	}

	${CLEARFIX}
`;
