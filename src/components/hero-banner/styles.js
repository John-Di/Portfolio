import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import BasicContrast from '../../utils/BasicContrast';
import { randomColor } from '../../utils/randoms';
import { device, size } from '../../utils/variables';

const bannerHeight = (size.mobileS * 1 / 2) / 16;

export const SECTION = styled.section`
  display: block;
  width: 100%;
  ${({ background }) => conditionalProp(background, `background-image: url('${background}');`)}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  max-height: ${bannerHeight}em;
  height: 100vh;
`;

export const BANNER = styled.div`
  background: ${background};
  display: block;
  width: 100%;
  max-width: ${size.laptopL}px;
  padding: 0 4%;
  height: 100%;

  h1 {
    color: white;
    margin: 0;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
`;

export const BANNERIMAGE = styled.div`
  margin-left: auto;
  height: 100%;

  @media screen and ${device.laptop} {
    width: ${bannerHeight}em;
  }
`;

const background = randomColor();

export const CONTENT = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    color: ${BasicContrast(background)};
  }
`;