import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import Clearfix from '../../utils/Clearfix';
import { ButtonReset, LinkReset } from '../../utils/Resets';
import { conditionalProp } from '../../utils/AssessProps';
import { LIGHTLINK } from '../chic-cta/styles';
import BasicContrast from '../../utils/BasicContrast';

export const CARD = styled.div`
  margin: auto;
  display: grid;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const IMAGE = styled.div`
  width: 100%;
  grid-area: img;
  z-index: -1;

  picture {
    zoom: 2;
  }

  .gatsby-image-wrapper {
    max-width: 100%;
  }
`;

export const TITLE = styled(GatsbyLink)`
  ${LinkReset}
  display: block;
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  grid-area: title;
  text-align: center;
  margin-bottom: 0.5em;
  line-height: 1.25;
  width: 100%;
  vertical-align: middle;
  white-space: nowrap;
  color: ${BasicContrast('black')};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const CONTENT = styled.div`
  ${LinkReset}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FADEINOVERLAY = styled.button`
  ${ButtonReset}
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 0.1s ease;

  &::before {
    content: '';
    background: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  ${({ isExpanded }) => conditionalProp(isExpanded, `
  &,
  &:hover,
  &:focus {
    &:before {
      opacity: ${1 / 3};
    }
  }
  `, `pointer-events: none;`)}

`;

export const DRAWER = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateY(100%);
  transition: transform 0.125s ease;
  pointer-events: none;
  color: ${BasicContrast('black')};

  ${({ isExpanded }) => conditionalProp(isExpanded, `
    transform: translateY(0);
  `)}

  button,
  a {
    border-color: ${BasicContrast('black')};
    color: ${BasicContrast('black')};
  }
`;

export const PRICE = styled.p`
  grid-area: price;
  font-size: 1.125em;
  text-align: center;
  margin: 0.5em 0;
  vertical-align: middle;
`;

export const OPTIONS = styled.div`
  grid-area: properties;
  display: block;
  margin: 0.75em 0;
  width: 100%;
  text-align: center;

  ul {
    margin-left: auto;
    margin-right: auto;
  }

  li label {
    height: 1.5em;
    width: 1.5em;

    &,
    &:focus,
    &:hover {
      border-width: 1px;
    }
  }

  ${Clearfix}
`;

export const BODY = styled.p`
  margin: 0.5em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
  line-height: 1.33;
`;

export const FORM = styled.div`
  margin: 0;
  grid-area: form;
`;

export const CTA = styled.div`
  width: 100%;
  text-align: center;
`;

export const VIEWMORE = LIGHTLINK;