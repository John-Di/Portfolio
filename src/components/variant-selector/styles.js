import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const VARIANTS = styled.div`
  ${props => conditionalProp(props.isHidden, `
    select {
      display: none;
    }`)}
`;

export const VARIANT = styled.option`
  height: 200px;
  display: block;
`;

export const SELECTOR = styled.select`
  ${VisuallyHidden}
`;