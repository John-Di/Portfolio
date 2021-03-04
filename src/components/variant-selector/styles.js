import styled from 'styled-components';
import { FancyButtonStyles } from '../../styles/CTAs';
import { conditionalProp } from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const VARIANTS = styled.div`
  ${props => conditionalProp(props.isHidden, `display: none`)}
`;

export const VARIANT = styled.option`
  height: 200px;
  display: block;
`;

export const SELECTOR = styled.select`
  ${VisuallyHidden}
`;