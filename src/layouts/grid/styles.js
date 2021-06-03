import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';
import { size } from '../../utils/variables';

const GridRules = ({ row = 0, col = 0, perRow }) => `
  ${conditionalProp(row && col, `margin: 0 -${col}em;`)}

  ul {
    padding: ${row}em 0 0;
    margin-bottom: -${row}em;

    li {
      padding: 0 ${col}em ${row}em;
      ${conditionalProp(perRow, `
        width: ${100 / perRow}%;
      `)}
    }
  }
`;

const RenderGridBreakpoint = ({ breakpoint, gap = [0, 0], perRow }) => {
  const rules = GridRules({ row: gap[0], col: gap[1], perRow });
  return conditionalProp(breakpoint, `
    @media screen and ${breakpoint} {
      ${rules}
    }
  `, rules)
};

const RenderGridRules = ({ rules }) => rules.reduce((acc, rule, index) => `
  ${acc}
  ${RenderGridBreakpoint(rule)}
`, ``);

export const CONTAINER = styled.div`
  ul {
    ${ListReset}
    width: 100%;
    margin: auto;

    li {
      ${ListReset}
      display: inline-block;
      vertical-align: bottom;
      float: left;
    }
    ${Clearfix}
  }

  ${RenderGridRules}
`;
