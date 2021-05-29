import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';
import { color } from '../../utils/variables';
import {
  conditionalProp
} from '../../utils/AssessProps';
import BasicContrast from '../../utils/BasicContrast';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const LABEL = styled.label`
  ${FlexCentered}
  ${props => conditionalProp(props.backgroundColor, `background-color: ${color[props.backgroundColor]};`, 'white')};
  width: 2.5em;
  height: 2.5em;
  border: 1px solid black;
  margin: 0 auto;
  border-color: ${props => BasicContrast(color[props.backgroundColor])};
`;

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;