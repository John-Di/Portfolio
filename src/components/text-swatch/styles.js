import styled from 'styled-components';
import {
  conditionalProp
} from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;