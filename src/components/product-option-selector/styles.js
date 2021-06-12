import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const FIELDSET = styled.fieldset`
${props => conditionalProp(props.isHidden, `display: none;`)}
  margin: 0 auto;
  flex-grow: 1;
  border: 0;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
`;

export const LEGEND = styled.legend`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  margin-bottom: 0.25em;
`;