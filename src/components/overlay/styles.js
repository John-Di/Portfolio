import styled from 'styled-components';
import { device } from '../../utils/variables';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import AssessProps, {
  conditionalProp
} from '../../utils/AssessProps';


const assessState = ({ isActive, backgroundColor = `black` }) => conditionalProp(isActive, `
  @media screen and ${device.max_tablet} {
    background-color: ${backgroundColor};
    opacity: 0.4;
    cursor: pointer;
  }
`);

export const OVERLAY = styled.div`
  opacity: 0;
  ${FullSizeOverlay}
  ${AssessProps}
  ${assessState}
  position: fixed;
  pointer-events: none;
  transition: 0.1s opacity;
  z-index: 3;

  ${props => conditionalProp(props.isActive, `
    opacity: 0.3;
    cursor: pointer;
    pointer-events: auto;
  `)}
`;