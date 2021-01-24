import styled from 'styled-components';
import { device } from '../../utils/variables';
import Log from '../../utils/Log';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import {
  FlexCentered
} from '../../utils/Flex';
import AssessProps, {
  renderText
} from '../../utils/AssessProps';

export const BLOCK = styled.div`
  ${FlexCentered}
	max-width: 100%;
	width: 100%;
  text-align: center;
	flex: 1 auto;
	position: relative;

	@media ${device.laptop} {
		padding-top: 0;
		justify-content: flex-start;
		align-items: center;
  }

  ${props => AssessProps(props)}

	${props => (props.overlay || props.isSquare) && `
		&::before {
			content: '';
			display: inline-block;
			vertical-align: bottom;
			padding-top: 100%;
			width: 100%;
		}
	`}
`;

export const CONTAINER = styled.div`
	flex: 1 auto;
	width: 100%;
	max-width: 1440px;
	padding: 0 8%;
  margin: 0 auto;
  ${FlexCentered}
	${props => props.overlay && FullSizeOverlay}
`;

export const CONTENT = styled.div`
  padding: 0;
	${props => renderText(props)}
`;
