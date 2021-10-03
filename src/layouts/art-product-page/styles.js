import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

const pageLeft = `
  float: left;
  display: inline-block;
  max-width: 50%;
  margin-right: 3rem;
`;

const pageRight = `
  max-width: calc(49% - 5rem);
  display: inline-block;
  width: 100%;

  ${Clearfix}
`;

export const ARTICLE = styled.article`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  ${Clearfix}

  @media screen and ${device.laptop} {
    max-width: ${size.laptopL}px;
  }
`;

export const TITLE = styled.h1`
  font-size: 2em;
  margin: 1em auto;

  @media screen and ${device.laptop} {
    ${pageRight}
    margin-bottom: 0;
    font-size: 3em;
  }
`;

export const MEDIA = styled.div`
  width: 100%;

  @media screen and ${device.laptop} {
    ${pageLeft}

    .image-gallery-wrapper {
      margin-left: auto;
      margin-right: 0;
    }
  }

  @media screen and ${device.laptopL} {
    margin-right: 5rem;
  }

  ~ * {
    @media screen and ${device.max_laptop} {
      max-width: ${size.mobileXL}px;
      padding: 0 4%;
      margin: 0 auto;
    }
  }

  ~ h1 {
    @media screen and ${device.max_laptop} {
      margin: 0.5em auto;
    }
  }
`;

export const DESCRIPTION = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  max-width: ${size.mobileXL / 16}em;
  text-align: left;
  line-height: 1.33;

  @media screen and ${device.laptop} {
    ${pageLeft}
    margin-right: auto;
    max-width: ${size.mobileM / 16}em;
  }
`;

export const FORM = styled.div`
  margin: 2em auto;

  @media screen and ${device.laptop} {
    display: block;
    margin: 1em auto;
    width: 100%;
    ${pageRight}
    ${Clearfix}
  }
`;

export const PRICING = styled.p`
  font-size: 2em;
  font-family: 'Roboto', 'Montserrat', serif;
  line-height: 1.33;
  margin-top: 1em;
  margin-bottom: 1em;

  @media screen and ${device.max_laptop} {
    text-align: right;
  }

  @media screen and ${device.laptop} {
    ${pageRight}
    margin: 0.5em auto 0.5em 0;
    ${Clearfix}
  }
`;

export const PRICE = styled.span``;

export const CTA = styled.div`
  margin: 2em auto;
  width: 100%;
  text-align: center;

  button {
    max-width: ${size.mobileL / 16}em;
    width: 100%;
  }

  @media screen and ${device.laptop} {
    ${pageRight}
    margin: 3em auto 0.5em 0;
    max-width: ${size.mobileL / 16}em;
    width: 100%;
    text-align: center;
    ${Clearfix}

    button {
      max-width: unset;
      width: unset;
    }
  }
`;