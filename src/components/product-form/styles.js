import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

const pageRight = `
  max-width: calc(49% - 5rem);
  display: inline-block;
  width: 100%;

  ${Clearfix}
`;

export const FORM = styled.form`
  margin: 2em auto;

  @media ${device.laptop} {
    display: block;
    margin: 1em auto;
    width: 100%;
    ${pageRight}
    ${Clearfix}
  }
`;

export const CTA = styled.div`
  margin: 2em auto;
  width: 100%;
  text-align: center;

  button {
    max-width: ${size.mobileL / 16}em;
    width: 100%;
  }

  @media ${device.laptop} {
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