import styled from 'styled-components';
import { device, size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';
import { VerticalLine } from '../../utils/Flex';

export const WRAPPER = styled.div`
  ${VerticalLine}
  height: 100%;
  width: 100%;
  margin: 0 auto;
  ${props => conditionalProp(props.hasPadding, `
    padding: 2% 0;

    @media screen and ${device.laptop} {
      padding: 8% 0;
    }
  `)}
  ${props => conditionalProp(props.maxWidth, `
    max-width: ${size.mobileXL + 'px'};
  `)}
`;

export const GALLERY = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: auto;
  width: 100%;

  ${Clearfix}
  @supports not (display:grid) {
  }
`;

export const MAIN_IMAGE = styled.div`
  grid-area: a;
  background-color: grey;
`;

export const IMG = styled.img`
  display: block;
  max-width: 100%;
  margin: 0;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
  transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;

  .current & {
    transform: scale(1);
  }
`;