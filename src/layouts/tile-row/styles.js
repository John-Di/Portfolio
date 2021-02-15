import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { conditionalProp } from '../../utils/AssessProps';

const assessLayout = ({ breakpoints = [] }) => conditionalProp(breakpoints, `
  float: left;
  vertical-align: bottom;
  max-width: 100%;
  width: 100%;
  margin-top: 8em;
  padding: 0 4%;

  &:first-child {
    margin-top: 0;
  }

	${breakpoints.reduce((acc, rule, i) => `
		${acc}

    ${conditionalProp(rule.bp && rule.maxWidth, `
      @media ${rule.bp} {
        max-width: ${rule.maxWidth};
        padding: 0 2%;

        ${conditionalProp(i < breakpoints.length - 1, `
          margin-top: 0;

          &:nth-child(n + 3) {
            margin-top: 6em;
          }`, `margin-top: 0;`)}
      }
    `)}
	`, '')}
`);

export const LAYOUT = styled.div`
	width: 100%;
  margin-top: 4em;
  ${props => conditionalProp(props.breakpoint, `
    @media ${props.breakpoint} {
      margin-top: 5em;
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
