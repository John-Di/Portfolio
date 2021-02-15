import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device } from '../../utils/variables';

export const ARTICLE = styled.article`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;

  ${Clearfix}
`;

export const TITLE = styled.h1`
  grid-area: title;
  font-size: 1.25em;

  @media ${device.tablet} {
    float: right;
    font-size: 1.5em;
  }

  @media ${device.laptop} {
    font-size: 2.5em;

  }
`;