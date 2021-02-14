import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';

const assessLayout = ({ breakpoints = [] }) => conditionalProp(breakpoints, `
  float: left;
  vertical-align: bottom;
  max-width: 100%;
  width: 100%;
  margin-top: 3.5em;

  &:first-child {
    margin-top: 0;
  }

	${breakpoints.reduce((acc, rule, i) => `
		${acc}

    ${conditionalProp(rule.bp && rule.maxWidth, `
      @media ${rule.bp} {
        max-width: ${rule.maxWidth};

        ${conditionalProp(i < breakpoints.length - 1, `
          margin-top: 0;

          &:nth-child(n + 3) {
            margin-top: 2em;
          }`, `margin-top: 0;`)}
      }
    `)}
	`, '')}
`);

export const LAYOUT = styled.div`
	width: 100%;
  margin-top: 2em;
  ${props => conditionalProp(props.breakpoint, `
    @media ${props.breakpoint} {
      margin-top: 3.5em;
    }
  `)}
  ${Clearfix}
`;

export const ITEM = styled.div`
	display: inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	${props => assessLayout(props)}
`
