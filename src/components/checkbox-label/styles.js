import styled from 'styled-components';
import { ButtonReset } from '../../utils/Resets';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const LABEL = styled.label`
  ${ButtonReset}
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
  cursor: pointer;
`

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;