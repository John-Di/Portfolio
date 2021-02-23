import styled from 'styled-components';
import { device, size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import {
  conditionalProp
} from '../../utils/AssessProps';
import FullSizeOverlay from '../../utils/FullSizeOverlay';

export const WRAPPER = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  ${props => conditionalProp(props.hasPadding, `
    padding: 2% 0;

    @media ${device.laptop} {
      padding: 8% 0;
    }
  `)}

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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

export const NAVIGATION = styled.div`
  margin-top: 0.75em;
  position: relative;

  &::before {
    content: '';
    ${FullSizeOverlay}
    display: block;
    box-shadow: inset 0.125em 0.125em 1em slategray;
  }

  ${Clearfix}

  @supports not (display:grid) {
  }
`;

export const MAIN_IMAGE = styled.div`
  grid-area: a;
  position: relative;
  background-color: grey;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
    width: 100%;
  }
`;

export const SCROLLABLE = styled.div`
  overflow: auto;
  white-space: nowrap;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const THUMBNAIL = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  margin: 0;
  float: left;
  max-width: ${props => props.maxWidth}%;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media ${device.laptop} {
    margin: 0;
    max-width: ${props => props.maxWidth}%;
  }

  &:not(.current) {
    cursor: pointer;

    &:hover {
      img {
        opacity: 1;
        transform: scale(1.25);
      }
    }
  }

  &:not(.current) img {
    ${props => props.transparency ? `opacity : ${props.transparency};` : ''}
  }

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
    width: 100%;
  }
`;

export const IMG = styled.img`
  display: block;
  max-width: 100%;
  vertical-align: bottom;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  height: 100%;
  transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;

  .current & {
    transform: scale(1.25);
  }
`
