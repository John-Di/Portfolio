import styled from 'styled-components';
import { device } from '../../utils/variables';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import {
  FlexCentered
} from '../../utils/Flex';
import AssessProps, {
  renderText,
  conditionalProp
} from '../../utils/AssessProps';

const assessProps = ({ overlay, isSquare, backgroundImage, whiteOnHover }) => `
  ${conditionalProp(overlay || isSquare, `
    &::before {
      content: '';
      display: inline-block;
      vertical-align: bottom;
      width: 100%;
      ${conditionalProp(isSquare, `padding-top: 100%;`, `
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
      `)}
      ${conditionalProp(backgroundImage, conditionalProp(whiteOnHover, `background-color: lightgrey;`, `background-color: grey;`))}
      opacity: 0.3;
  `)}
`;

export const BLOCK = styled.div`
  ${FlexCentered}
	max-width: 100%;
	width: 100%;
  text-align: center;
	flex: 1 auto;
	position: relative;

	@media screen and ${device.laptop} {
		padding-top: 0;
		justify-content: flex-start;
		align-items: center;
  }

  ${props => AssessProps(props)}
  ${props => assessProps(props)}
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
