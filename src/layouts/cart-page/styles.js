import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';


export const ARTICLE = styled.article`
  margin: 0 auto;
  width: 100%;
  max-width: ${size.tablet}px;
  padding: 0 4%;
  flex-grow: 1;
  ${Clearfix}

  @media screen and ${device.laptop} {
    max-width: ${size.laptopL}px;
  }
`;

export const TITLE = styled.h1`
  grid-area: title;
  font-size: 2em;

  @media screen and ${device.laptop} {
    font-size: 3em;
  }
`;