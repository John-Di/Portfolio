import styled from 'styled-components';
import { size } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import {
  VerticalLine
} from '../../utils/Flex';
import AssessProps, { conditionalProp } from '../../utils/AssessProps';


const assessProps = ({ overlay, isSquare, backgroundImage, whiteOnHover }) => `
  width: 100%;

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
  `)}
`;

export const TILE = styled.article`
  width: ${+size.mobileS / 16}em;
  max-width: 100%;
  margin: auto;
  ${VerticalLine}
`;

export const IMAGE = styled.div`
  ${props => assessProps(props)}
`
