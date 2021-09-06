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
  width: 100%;
  ${Clearfix}
`;

const block = `
  display: inline-block;
  margin-top: 2em;
  vertical-align: top;
  width: 100%;
`;

export const SORT = styled.div`
  text-align: right;
  margin: 2em 0;
  width: 100%;
  ${Clearfix}
`;

const Drawer = `
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: ${size.tablet / 16}em;
  z-index: 3;
`,
  StickyNav = `
  ${block}
  position: sticky;
  top: 6em;
  max-width: ${100 * 1 / 3}%;
`;

export const FILTERS = styled.div`
  ${Drawer}
  width: 100%;

  > nav {
    max-width: ${size.mobileS / 16}em;
  }

  @media screen and ${device.laptop} {
    ${StickyNav}
  }
`;

export const PRODUCTS = styled.div`
  ${block}

  @media screen and ${device.laptop} {
    max-width: ${100 * 2 / 3}%;
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