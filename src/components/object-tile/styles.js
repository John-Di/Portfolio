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
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  grid-area: title;
  text-align: center;
  margin-bottom: 0.5em;
  line-height: 1.25;
  width: 100%;
  vertical-align: middle;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const TILE = styled.article`
  max-width: ${+size.mobileXL / 16}em;
  width: 100%;
  ${props => conditionalProp(props.maxWidth, `max-width: ${props.maxWidth};`)}
  margin: auto;
  display: grid;
  grid-template: 'img img' auto 'title title' auto 'price price' auto 'body body' auto 'form form' auto 'cta cta' auto / 1fr 1fr;
  padding: 0 1em 2em;
`;

export const BODY = styled.p`
  font-size: 1.em;
  margin: 1em 0;
  grid-area: body;
  text-align: center;
  line-height: 1.33;
`;
