import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';

const assessState = ({ isLocked = false, scrollPosition = 0 }) => conditionalProp(isLocked && scrollPosition, `
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;

  main {
    position: absolute;
    width: 100%;
    left: 0;
    top: ${scrollPosition}px;
  }
`);

export const PAGE = styled.div`
  max-width: 100vw;
  width: 100%;
  overflow: auto;
  position: relative;

  ${assessState}
`;