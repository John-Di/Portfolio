import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

export const ARTICLE = styled.article`
  margin: 0 auto;
  width: 100%;
  max-width: ${size.laptop}px;
  padding: 0 4%;
  flex-grow: 1;
  ${Clearfix}

  @media screen and ${device.laptop} {
    max-width: ${size.laptopL}px;
  }

`;

export const PRODUCTS = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  max-width: ${size.laptopL}px;

  > div {
    text-align: center;

    > ul {
      overflow: auto;
      height: auto;

      > li {
        article {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: ${100 * 1.875 / 3}%;
            bottom: 0;
            box-shadow: 0 0.25em 0.5em lightgrey;
            z-index: -1;
          }

          form ul > li [type="radio"] ~ label {
            height: 2em;
            width: 2em;
            border-width: 1px;
          }
        }
      }
    }
  }
`;