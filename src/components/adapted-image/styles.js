import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import Clearfix from '../../utils/Clearfix';

export const IMAGE = styled.div`
  display: block;
  grid-area: img;
  height: 100%;

  .gatsby-image-wrapper {
    max-width: 100%;
    height: 100%;
  }

  * {
    pointer-events: none;
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