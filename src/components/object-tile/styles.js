import styled from 'styled-components';
import { size } from '../../utils/variables';
import { LinkReset } from '../../utils/Resets';
import {
  FlexCentered
} from '../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";

import AssessProps, { conditionalProp } from '../../utils/AssessProps';


const assessProps = ({ overlay, image, whiteOnHover }) => `
  &::before {
    content: '';
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    max-width: 100%;
    padding-top: 100%;
    ${AssessProps({ overlay, isSquare: true, backgroundImage: image, whiteOnHover })}
    ${conditionalProp(image, conditionalProp(whiteOnHover, `background-color: lightgrey;`, `background-color: grey;`))}
  }
`;

export const HEADING = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}

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
  width: ${+size.mobileL / 16}em;
  max-width: 100%;
  margin: auto;
  display: grid;
  grid-template: 'img img' 2fr 'title value' auto 'body body' auto 'cta cta' auto / 1fr 1fr;
`;

export const IMAGE = styled(GatsbyLink)`
  width: 100%;
  grid-area: img;
  margin-bottom: 2em;
  ${assessProps}
`


export const BODY = styled.p`
  margin: 1em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
`;
