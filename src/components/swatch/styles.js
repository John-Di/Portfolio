import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';
import { color, device } from '../../utils/variables';
import {
  conditionalProp
} from '../../utils/AssessProps';
import BasicContrast from '../../utils/BasicContrast';
import VisuallyHidden from '../../utils/VisuallyHidden';


const Swatch = ({ backgroundColor }) => `
  ${FlexCentered}
  ${conditionalProp(backgroundColor, `background-color: ${color[backgroundColor]};`, 'white')};
  width: 2em;
  border: 1px solid black;
  margin: 0 auto;

  @media screen and ${device.mobileM} {
    width: 2.5em;
  }
`;

const Selectable = ({ isCurrent, backgroundColor }) => `
  cursor: pointer;

  ${conditionalProp(isCurrent, `
  &,`)}
  &:hover,
  &:focus {
    outline: 1px solid black;
    border-width: 2px;
    border-style: solid;
    border-color: ${BasicContrast(color[backgroundColor])};
  }
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const DIV = styled.div`
  ${Swatch}
  height: 1.5em;

  span {
    font-size: 0.75em;
  }
`;

export const LABEL = styled.label`
  ${Swatch}
  ${Selectable}
  height: 2em;

  @media screen and ${device.mobileM} {
    height: 2.5em;
  }
`;

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;