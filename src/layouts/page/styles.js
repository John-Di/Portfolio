import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
export const PAGE = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  oveflow: auto;

  ${assessState}
`;

const assessState = ({ isLocked = false }) => conditionalProp(isLocked, `
  overflow: hidden;
`);