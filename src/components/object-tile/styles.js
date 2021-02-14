import styled from 'styled-components';
import { size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { FloatLeftHalf } from '../../utils/Float';
import {
  VerticalLine
} from '../../utils/Flex';
import AssessProps, { conditionalProp } from '../../utils/AssessProps';


const assessProps = ({ overlay, isSquare, backgroundImage, whiteOnHover }) => `

  ${conditionalProp(overlay || isSquare, `
    &::before {
      content: '';
      display: inline-block;
      vertical-align: bottom;
      width: 100%;
      max-width: 100%;
      ${AssessProps({ overlay, isSquare, backgroundImage, whiteOnHover })}
      ${conditionalProp(isSquare, `padding-top: 100%;`)}
      ${conditionalProp(backgroundImage, conditionalProp(whiteOnHover, `background-color: lightgrey;`, `background-color: grey;`))}
    }
  `)}
`;

export const TILE = styled.article`
  width: ${+size.mobileS / 16}em;
  max-width: 100%;
  margin: auto;
  display: grid;
  grid-template: 'img img' 2fr 'title value' auto 'body body' auto / 1fr 1fr;
`;

export const IMAGE = styled.div`
  width: 100%;
  grid-area: img;
  margin-bottom: 1em;
  ${assessProps}
`

export const HEADING = styled.h2`
  margin: 1em 0;
  grid-area: title;
  margin: 0;
  margin-right: auto;
`;

export const BODY = styled.p`
  margin: 1em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
`;