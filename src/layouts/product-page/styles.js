import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

const pageLeft = `
  float: left;
  display: inline-block;
  max-width: 50%;
  margin-right: 5em;
`;

const pageRight = `
  max-width: calc(50% - 5rem);
  display: inline-block;
  width: 100%;

  ${Clearfix}
`;

export const ARTICLE = styled.article`
  margin: 5em auto;
  width: 100%;
  max-width: ${size.mobileXL}px;
  flex-grow: 1;
  ${Clearfix}

  @media ${device.max_laptop} {
    padding: 0 4%;
  }

  @media ${device.laptop} {
    margin: 10em auto;
    max-width: ${size.laptopL}px;
  }
`;

export const TITLE = styled.h1`
  grid-area: title;
  font-size: 2em;

  @media ${device.laptop} {
    ${pageRight}
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    font-size: 3em;
  }
`;
export const MEDIA = styled.div`
  grid-area: media;
  width: 100%;

  @media ${device.laptop} {
    ${pageLeft}

    .image-gallery-wrapper {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

export const DESCRIPTION = styled.p`
  margin: 0.5em 0;
  max-width: ${size.mobileXL / 16}em;
  grid-area: description;
  text-align: left;
  line-height: 1.33;

  @media ${device.laptop} {
    ${pageLeft}
    margin-right: auto;
    max-width: ${size.mobileM / 16}em;
  }
`;

export const FORM = styled.form`

@media ${device.laptop} {
  display: block;
  margin: 1em auto;
  width: 100%;
  ${pageRight}
  ${Clearfix}
}
`;

export const PRICING = styled.p`
  grid-area: price;
  font-size: 2em;
  font-family: 'Roboto', 'Montserrat', serif;
  line-height: 1.33;
  margin: 1em auto 1em 0;

  @media ${device.max_laptop} {
    text-align: right;
  }

  @media ${device.laptop} {
    ${pageRight}
    margin: 0.5em auto 0.5em 0;
    ${Clearfix}
  }
`;

export const PRICE = styled.span``;

export const CTA = styled.div`
  margin: 1em auto;
  width: 100%;
  text-align: right;

  @media ${device.laptop} {
    ${pageRight}
    margin: 3em auto 0.5em 0;
    max-width: ${size.mobileL / 16}em;
    text-align: center;
    ${Clearfix}
  }
`;