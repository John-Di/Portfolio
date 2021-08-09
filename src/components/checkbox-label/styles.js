import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import { ButtonReset } from '../../utils/Resets';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const LABEL = styled.label`
  ${ButtonReset}

  ${({ isCurrent }) => conditionalProp(isCurrent, `
    background: #000000;
    color: #ffffff;
  `)}
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