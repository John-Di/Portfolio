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

  &,
  & * {
      /* width */
    ::-webkit-scrollbar {
      cursor: pointer;
      width: 0.75em;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      cursor: pointer;
      box-shadow: inset 0 0 1px grey;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ accentColor }) => accentColor}55;
      transition: width 0.5s ease-in 0;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ accentColor }) => accentColor}AA;
    }
  }

  ${assessState}

  main {
    margin: 4em 0;
  }
`;