import styled from 'styled-components';
import { device, size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';
import { VerticalLine } from '../../utils/Flex';
import { ListReset } from '../../utils/Resets';

export const QUICKCART = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: calc(0% - ${size.mobileL / 16}em);
  width: ${size.mobileL / 16}em;
  max-width: 100vw;
  transition: right 0.1s;
  z-index: 3;

  ${props => conditionalProp(props.isOpen, `
    right: 0;
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
  box-shadow: 0 3px 0px 0px rgba(0,0,0,0.2);;
`;

export const ITEMS = styled.ul`
  ${ListReset}
`;

export const ITEM = styled.li`
  margin: 0;
`;

export const H1 = styled.h1`
  display: block;
  margin: 0;
  height: 1.6em;
  line-height: 1.6;
  vertical-align: middle;
`;

export const FOOTER = styled.footer`

`;