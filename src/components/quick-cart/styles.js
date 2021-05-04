import styled from 'styled-components';
import { device, size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';
import { VerticalLine } from '../../utils/Flex';

export const QUICKCART = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: calc(0% - ${size.mobileL / 16}em);
  width: ${size.mobileL / 16}em;
  max-width: 100vw;
  transition: right 0.1s;

  ${props => conditionalProp(props.isOpen, `
    right: 0;
  `)}
`;