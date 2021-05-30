import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';
import { color } from '../../utils/variables';
import {
  conditionalProp
} from '../../utils/AssessProps';
import BasicContrast from '../../utils/BasicContrast';
import VisuallyHidden from '../../utils/VisuallyHidden';


const Swatch = ({ backgroundColor }) => `
  ${FlexCentered}
  ${conditionalProp(backgroundColor, `background-color: ${color[backgroundColor]};`, 'white')};
  width: 2.5em;
  height: 2.5em;
  border: 1px solid black;
  margin: 0 auto;
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
`;

export const LABEL = styled.label`
  ${Swatch}
  ${Selectable}
`;

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;