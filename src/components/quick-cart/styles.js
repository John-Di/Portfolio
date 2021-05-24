import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';
import { device, size } from '../../utils/variables';
import { EXTERNAL, LINK } from '../chic-cta/styles';

const FOOTER_HEIGHT = 275;

export const QUICKCART = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  transition: right 0.1s;
  z-index: 3;

  @media screen and ${device.laptop} {
    max-width: ${size.mobileM / 16 + 1}em;
  }

  ${props => conditionalProp(props.isOpen, `
    right: 0;
  `, `
    right: -100vw;

    @media screen and ${device.laptop} {
      right: calc(0% - ${size.mobileM / 16 + 1}em);
    }
  `)}

  ${props => conditionalProp(props.innerPadding, `
    h1 {
      padding: 0.5em 2%;
    }

    li {
      padding: 0 2%;
    }
  `, `
  `)}
`;

export const HEADER = styled.header`
  padding: 0 6%;
  position: relative;
  box-shadow: 0 3px 0px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const ITEMS = styled.ul`
  ${ListReset}
  height: calc(100% - ${FOOTER_HEIGHT / 16}em);
  overflow-y: scroll;
`;

export const ITEM = styled.li`
  margin: 0;
`;

export const H1 = styled.h1`
  display: block;
  margin: 0;
  height: 1.575em;
  line-height: 1.575;
  vertical-align: middle;
`;

export const FOOTER = styled.footer`
  border-top: 1px solid lightgrey;
  height: ${FOOTER_HEIGHT / 16}em;
  padding: 2% 9% 4% 6%;
  position: relative;
  z-index: 1;

  a,
  button {
    display: block;
    margin: auto;
    margin-bottom: 1em;
    margin-top: 1em;
  }
`;

export const TOTALS = styled.dl`
  ${Clearfix}

  &,
  dt,
  dd {
    ${ListReset}
  }

  dt,
  dd {
    display: inline-block;
    width: 100%;
    max-width: 50%;
    padding: 4% 2%;
  }

  dd {
    text-align: right;
    margin-left: auto;
  }
`;

export const CART = LINK;

export const CHECKOUT = EXTERNAL;