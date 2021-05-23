import styled from 'styled-components';
import { device } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import {
  PropMap,
  conditionalProp
} from '../../utils/AssessProps';

export const HEADING = styled.div`
	width: 100%;
	flex-flow: column nowrap;

	text-align:${props => props.textAlignmentSmall ? props.textAlignmentSmall : `center`};

	@media screen and ${device.tablet} {
		text-align:${props => props.textAlignmentLarge ? props.textAlignmentLarge : `center`};
	}

	h1 {
		font-size: 1.75em;
		font-weight: bold;

		@media screen and ${device.tablet} {
			font-size: 3.5em;
		}
	}

	h2 {
		font-size: 1.125em;
		margin-top: 0;
		margin-bottom: 2em;

		@media screen and ${device.tablet} {
			font-size: 1.5em;
		}
	}
`;

const generateLayout = ({ maxWidth = '100%', hasPadding = false, textAlignmentSmall = 'center', textAlignmentLarge = 'left', hasMarginSmall = true, hasMarginLarge = true, cols, isBanner = false, isHero = false }) => `

  ${conditionalProp(hasMarginSmall, `
    margin: 4em auto;
  `)}

  ${conditionalProp(hasMarginLarge, `
    @media screen and ${device.laptop} {
      margin: 8em auto;
    }
  `)}

  ${conditionalProp(hasPadding, `
    padding: 0;

    @media screen and ${device.laptop} {
      padding: 0 8%;
    }
  `)}

  max-width: ${conditionalProp(maxWidth, maxWidth, `100%`)};

  ${conditionalProp(isBanner, `
    ${conditionalProp(isHero, `min-height: 100vh;`, `min-height: 50vh;`)}

		text-align: ${textAlignmentSmall};

		@media screen and ${device.tablet} {
			text-align: ${textAlignmentLarge};
		}

		p {
			@media screen and ${device.mobileL} {
				line-height: 1.25;
			}
		}
	`)}
`;

const assessProps = (props) => `
	${PropMap.bind(this, null)}
	${generateLayout(props)}
`

export const SECTION = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	width: 100%;

	${props => assessProps(props)}
	${Clearfix}
`;
