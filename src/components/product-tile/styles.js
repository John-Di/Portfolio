import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";


export const IMAGE = styled(GatsbyLink)`
  width: 100%;
  grid-area: img;
  margin-bottom: 2em;

  .gatsby-image-wrapper {
    max-width: 100%;
  }
`;

export const PRICE = styled.p`
    grid-area: value;
    font-size: 1.25em;
    text-align: right;
    margin: 0;
`;

export const BODY = styled.p`
  margin: 0.5em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
`;

export const CTA_WRAPPER = styled.div`
  text-align: center;
  width: 100%;
  grid-area: cta;
  margin-top: 1em;
`;