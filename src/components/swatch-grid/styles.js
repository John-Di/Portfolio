import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';
import { device } from '../../utils/variables';

export const GRID = styled.ul`
  ${ListReset}
  margin: -4%;

  @media screen and ${device.tablet} {
    margin: -${props => props.gutterOffset}em;
  }

  li {
    padding: ${props => props.gutterOffset}em;
  }

  ${Clearfix}
`;

export const ITEM = styled.li`
  ${ListReset}
  display: inline-block;
  vertical-align: bottom;
  float: left;
  margin: auto;
`;