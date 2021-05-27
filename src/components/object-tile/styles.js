import styled from 'styled-components';
import { size } from '../../utils/variables';
import { LinkReset } from '../../utils/Resets';
import {
  FlexCentered
} from '../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";

import { PropMap, conditionalProp } from '../../utils/AssessProps';


const assessProps = ({ overlay, image, whiteOnHover }) => `
  &::before {
    content: '';
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    max-width: 100%;
    ${PropMap(undefined, { overlay, isSquare: true, backgroundImage: image, whiteOnHover })}
    ${conditionalProp(image, `
      padding-top: 100%;
      ${conditionalProp(whiteOnHover, `
        background-color: lightgrey;
      `, `
        background-color: grey;
      `)}`)}
  }
`;

export const HEADING = styled(GatsbyLink)`
  ${LinkReset}

  font-size: 1.25em;
  font-weight: bold;
  margin: 0;
  grid-area: title;
  text-align: left;
  margin-right: auto;
  line-height: 1.25;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const TILE = styled.article`
  max-width: ${+size.mobileL / 16}em;
  width: 100%;
  ${props => conditionalProp(props.maxWidth, `max-width: ${props.maxWidth};`)}
  margin: auto;
  display: grid;
  grid-template: 'img img' 2fr 'title value' 5em 'body body' auto 'cta cta' auto / 1fr 1fr;
`;

export const IMAGE = styled(GatsbyLink)`
  width: 100%;
  grid-area: img;
  margin-bottom: 2em;
  ${assessProps}

  .gatsby-image-wrapper {
    max-width: 100%;
  }
`;


export const BODY = styled.p`
  margin: 1em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
`;
