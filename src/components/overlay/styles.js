import styled from 'styled-components';
import { device } from '../../utils/variables';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import { AssessProps } from '../../utils/AssessProps';
import {
  conditionalProp
} from '../../utils/AssessProps';


const assessState = ({ isActive, backgroundColor = `black` }) => conditionalProp(isActive, `
  @media ${device.max_tablet} {
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
`;