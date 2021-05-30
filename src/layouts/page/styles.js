import styled from 'styled-components';
import { conditionalProp, PropMap } from '../../utils/AssessProps';

const AssessState = ({ isLocked = false, scrollPosition = 0, primaryColor, headerHeight }) => `
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
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${primaryColor}55;
      transition: width 0.25s ease-in 0;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${primaryColor}AA;
    }
  }

  main {
    margin-top: ${headerHeight / 16}em;
  }

  ${conditionalProp(isLocked && scrollPosition, `
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;

    main {
      position: absolute;
      width: 100%;
      left: 0;
      top: ${scrollPosition}px;
    }
  `)}
`;

export const PAGE = styled.div`
  max-width: 100vw;
  width: 100%;
  overflow: auto;
  position: relative;

  ${PropMap.bind(this, AssessState)}
`;