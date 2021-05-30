import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';
import { device } from '../../utils/variables';

const GridRules = ({ row, col, perRow }) => `
  margin: -${row / 4}em -${col / 4}em;

  @media screen and ${device.tablet} {
    margin: -${row / 2}em -${col / 2}em;
  }

  li {
    ${ListReset}
    display: inline-block;
    vertical-align: bottom;
    float: left;
    margin: auto;
    padding: ${row / 2}em ${col / 2}em;
    ${conditionalProp(perRow, `
      max-width: ${(100 / perRow)}%;
    `)}
  }
`

const RenderGrid = ({ gutterOffset, perRow }) => gutterOffset.reduce((acc, { breakpoint, ...gaps }, i) => `
  ${acc}
  ${conditionalProp(breakpoint, `
    @media screen and ${breakpoint} {
      ${GridRules({ ...gaps, perRow })}
    }
  `, GridRules({ ...gaps, perRow }))}
`, ``);

export const GRID = styled.ul`
  ${ListReset}
  ${RenderGrid}
  ${Clearfix}
`;
