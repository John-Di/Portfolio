import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

export const SECTION = styled.section`
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: ${props => props.maxWidth};

	${props => props.hasPadding && `
		padding: 0 1em;
	
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

	@media ${device.laptop} {
		flex-direction: row;
		flex-wrap: ${props => props.children && (props.children.length > 4 ? 'wrap' : 'nowrap')};
	}
	${CLEARFIX}
`;

export const INNER = styled.div`
	width: 100%;
	height: 100%;
	max-width: 100%;
	
	${props => props.background && `
		background-image: url('${props.background}');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	`};

`;


export const PADDEDINNER = styled(INNER)`
	padding: 0;

	@media ${device.laptop} {
		padding: 0
	} 
`;
