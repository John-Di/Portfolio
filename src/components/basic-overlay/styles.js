import styled from 'styled-components';
import { device } from '../../utils/variables';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import {
  PropMap,
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
  ${FullSizeOverlay}
  ${PropMap.bind(this, undefined)}
  ${assessState}
  opacity: 0;
  position: fixed;
  pointer-events: none;
  transition: 0.125s opacity;

  ${props => conditionalProp(props.isActive, `
    opacity: 0.3;
    cursor: pointer;
    pointer-events: auto;
  `)}
`;