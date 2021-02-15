import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

export const ARTICLE = styled.article`
  margin: 10em auto;
  width: 100%;
  max-width: ${size.mobileXL}px;
  flex-grow: 1;

  @media ${device.tablet} {
    max-width: ${size.laptopL}px;
  }

  ${Clearfix}
`;

export const TITLE = styled.h1`
  grid-area: title;
  font-size: 1.5em;

  @media ${device.tablet} {
    float: right;
    max-width: calc(50% - 5rem);
    display: inline-block;
    width: 100%;
  }

  @media ${device.mobileXL} {
    font-size: 2em;
  }

  @media ${device.laptop} {
    font-size: 2.5em;
  }
`;
export const MEDIA = styled.div`
  grid-area: media;
  width: 100%;

  @media ${device.tablet} {
    float: left;
    display: inline-block;
    max-width: 50%;
    margin-right: 5em;

    .image-gallery-wrapper {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

export const PRICE = styled.span`
  grid-area: price;

  @media ${device.tablet} {
    float: right;
    max-width: calc(50% - 5rem);
    width: 100%;
    display: inline-block;
  }
`;