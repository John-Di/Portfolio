import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import {
  conditionalProp
} from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';
import { ListReset } from '../../utils/Resets';

export const SWATCHES = styled.ul`
  ${ListReset}
  margin: 1em -${props => props.gutterOffset}em;

  ${Clearfix}
`;

export const SWATCH = styled.li`
  ${ListReset}
  display: inline-block;
  float: left;
  vertical-align: bottom;
  margin: 0 ${props => props.gutter}em;
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const LABEL = styled.label`
  cursor: pointer;
  display: block;
  ${props => conditionalProp(props.backgroundColor, `background-color: ${props.backgroundColor};`)};
  width: 2.5em;
  height: 2.5em;
  border: 1px solid black;
  margin: 0;

  &.current,
  &:hover,
  focus {
    outline: 1px solid black;
    border: 2px solid ${props => props.borderColor};
  }
`;

export const VALUE = styled.span`
  ${props => props.isHidden && VisuallyHidden}
`;