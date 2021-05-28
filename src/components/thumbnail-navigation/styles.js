import styled from 'styled-components';
import { device, size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';
import { ButtonReset } from '../../utils/Resets';
import { responsiveBreakpoints } from '../../styles/util';
import { VerticalLine } from '../../utils/Flex';

const BUTTON_WIDTH = 3;

export const SCROLLABLE = styled.div`
  position: relative;
  margin-top: ${props => props.gap}em;
  max-width: 100%;

  ${props => responsiveBreakpoints([device.laptopL], `
    ${conditionalProp(props.buttonsInside, `padding: 0 ${BUTTON_WIDTH}em;`)}
  `, true)}

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
        transition: left 0.25s;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
          display: none;
        }
      }

      li {
        float: none;
      }
    `)}
  }
`;


export const NAVIGATION = styled.nav`
  width: 100%;

  li {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    padding: 2.5%;
    max-width: ${100 / 4}%;


    @media screen and ${device.mobileXL} {
      max-width: ${100 / 4}%;
    }
    @media screen and ${device.mobileXL} {
      padding: ${props => props.gap}em;
    }
  }
`;