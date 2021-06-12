import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';

export const FORM = styled.form`
  @media screen and ${device.laptop} {
    display: block;
    width: 100%;
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

  @media screen and ${device.laptop} {
    display: inline-block;
    margin: 1em auto 0.5em 0;
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