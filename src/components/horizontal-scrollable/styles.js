import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device } from '../../utils/variables';
import { responsiveBreakpoints } from '../../styles/util';
import { conditionalProp } from '../../utils/AssessProps';

const BUTTON_WIDTH = 3;

export const SCROLLABLE = styled.div`
  position: relative;
  margin-top: ${props => props.gap}em;
  max-width: 100%;
  ${props => conditionalProp(props.buttonPadding, `padding: 0 ${BUTTON_WIDTH}em;`)}

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  ${Clearfix}

  nav {
    overflow: hidden;
    ${responsiveBreakpoints([[device.mobileXL, device.max_laptop].join(' and '), device.laptopL], `
      white-space: nowrap;

      ul {
        left: 0;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        transition: left 0.5s;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    `)}
  }
`;