import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

export const ARTICLE = styled.article`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  ${Clearfix}
`;

export const BODY = styled.section`
  max-width: ${size.laptopL}px;
  padding: 0 4%;
  margin: 0 auto;
  width: 100%;
  ${Clearfix}
`;

export const CLEARFIX = styled.div`
  margin: 0 -1em;
  width: 100%;
  ${Clearfix}
`;

const block = `
  display: inline-block;
  float: right;
  margin-top: 2em;
  vertical-align: top;
  padding: 0 1em;

  @media screen and ${device.laptop} {
    float: left;
  }
`;

export const FILTERS = styled.div`
  ${block}
  position: sticky;
  top: 6em;
  width: 100%;
  float: left;

  @media screen and ${device.laptop} {
    max-width: ${100 * 1 / 4}%;
  }
`;

export const PRODUCTS = styled.div`
  ${block}

  @media screen and ${device.laptop} {
    max-width: ${100 * 3 / 4}%;
  }

  > div {
    text-align: center;

    > ul {
      overflow: auto;
      height: auto;

      > li {

        article {
          position: relative;
          max-width: ${240 / 16}em;
          margin: auto;
          height: 100%;

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
            height: 1.25em;
            width: 1.25em;
            border-width: 1px;
          }
        }
      }
    }
  }
`;