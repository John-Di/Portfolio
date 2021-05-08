import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ListReset } from '../../../utils/Resets';


export const UTIL = styled.nav`
  grid-area: util;
  width: 100%;
  height: 100%;
`;

export const ITEMS = styled.ul`
  ${ListReset}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: stretch;
  width: 100%;
  height: 100%;

  @media screen and ${device.max_tablet} {
    background: white;
    transition: height 2s 0s;
  }

  @media screen and ${device.tablet} {
    justify-content: ${props => props.desktopNavAlignment};
  }

  li {
    margin-bottom: 0;
  }
`;

export const ITEM = styled.li`
  ${ListReset}
  height: 100%;

  @media screen and ${device.max_tablet} {
    width: 100%;
  }
`;