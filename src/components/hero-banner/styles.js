import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import { size } from '../../utils/variables';

export const SECTION = styled.section`
  display: block;
  width: 100%;
  ${({ background }) => conditionalProp(background, `background-image: url('${background}');`)}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  max-height: ${size.mobileS / 16}em;
  height: 100vh;
`;

export const BANNER = styled.div`
  display: block;
  width: 100%;
  max-width: ${size.laptopL}px;
  padding: 0 4%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  h1 {
    text-transform: uppercase;
    color: white;
  }
`;
