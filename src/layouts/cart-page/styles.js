import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';
import { EXTERNAL, LINK } from '../../components/chic-cta/styles';
import {
  TableReset,
  ListReset
} from '../../utils/Resets';
import { PropMap } from '../../utils/AssessProps';


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

  ul {
    overflow: auto;
    height: auto;
    ${Clearfix}
  }
`;

export const TITLE = styled.h1`
  grid-area: title;
  font-size: 2em;

  @media screen and ${device.laptop} {
    font-size: 3em;
  }
`;

export const LINEITEMS = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 100%;

  @media screen and ${device.tablet} {
    float: left;
    max-width: 50%;
  }
`;

const Summary = ({ primaryColor }) => `
  background-color: ${primaryColor}15;
`;

export const SUMMARY = styled.footer`
  display: inline-block;
  vertical-align: bottom;
  width: 100%;

  @media screen and ${device.max_tablet} {
    margin-top: 3em;
  }

  @media screen and ${device.tablet} {
    float: left;
    max-width: 50%;
  }

  section {
    ${PropMap.bind(this, Summary)}
    box-shadow: 0 3px 1px 1px ${`#000000`}44;
    border-radius: 1%;
    padding: 2em;
    max-width: ${size.mobileL / 16}em;
    margin: auto;

    p {
      font-size: 1.25em;
      margin: 0;
    }
  }

  table {
    ${TableReset}

    caption {
      text-align: left;
      font-size: 2em;
      margin-bottom: 1em;
    }

    h2 {
      margin-top: 0;
    }

    td {
      text-align: right;
    }

    ~ div {
    }
  }
`;

export const ACTIONS = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2em;

  a,
  button {
    margin: auto;
    max-width: 18em;
    width: 100%;
  }
`;

export const CART = LINK;

export const CHECKOUT = EXTERNAL;