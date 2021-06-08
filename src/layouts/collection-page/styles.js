import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

export const PRODUCTS = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  max-width: ${size.laptopL}px;

  > div > ul > li {
    article {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: ${100 * 3 / 5}%;
        bottom: 0;
        box-shadow: 0 0.5em 2em lightgrey;
        z-index: -1;
      }
    }
  }
`;