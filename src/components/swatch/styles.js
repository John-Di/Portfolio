import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';
import {
  conditionalProp
} from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const LABEL = styled.label`
  cursor: pointer;
  ${FlexCentered}
  ${props => conditionalProp(props.backgroundColor, `background-color: ${props.backgroundColor};`)};
  width: 2.5em;
  height: 2.5em;
  border: 1px solid black;
  margin: 0;

  ${props => conditionalProp(props.isCurrent, `
    outline: 1px solid black;
    border: 2px solid ${props.borderColor};
  `)};

  &:hover,
  &:focus {
    outline: 1px solid black;
    border: 2px solid ${props => props.borderColor};
  }
`;

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;