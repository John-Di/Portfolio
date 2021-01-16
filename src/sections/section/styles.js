import styled from 'styled-components';
import { size, device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';

console.log('section/styles/');

export const HEADING = styled.div`
	width: 100%;
	flex-flow: column nowrap;

	text-align:${props => props.textAlignmentSmall ? props.textAlignmentSmall : `center`};

	@media ${device.tablet} {
		text-align:${props => props.textAlignmentLarge ? props.textAlignmentLarge : `center`};
	}

	h1 {
		font-size: 1.75em;
		font-weight: bold;

		@media ${device.tablet} {
			font-size: 3.5em;
		}
	}

	h2 {
		font-size: 1.125em;
		margin-top: 0;
		margin-bottom: 2em;
		
		@media ${device.tablet} {
			font-size: 1.5em;
		}
	}
`;

const generateBackground = ({ backgroundImage = false, backgroundColor = false }) => `

	${(() => {
		console.log('generateLayout', { backgroundImage, backgroundColor });
		return ``;
	})()}

	${(() => backgroundImage && `
		background-image: url('${backgroundImage}');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	`)()};

	${(() => backgroundColor && `
		background-color: ${backgroundColor};
	`)()};

`;

const generateLayout = ({ maxWidth = `${size.laptopL}px`, hasPadding = false, textAlignmentSmall = 'center', textAlignmentLarge = 'left', hasMarginSmall, hasMarginLarge, cols, isBanner = false, isHero = false }) => `

	${(() => {
		console.log('generateLayout', { maxWidth, hasPadding, textAlignmentSmall, textAlignmentLarge, hasMarginSmall, hasMarginLarge, isBanner, isHero });
		return ``;
	})()}

	${(() => hasMarginSmall && `
		margin: 4em auto;	
	`)()}

	${(() => hasMarginLarge && `
		@media ${device.laptop} {
			margin: 8em auto;
		}
	`)()}

	${(() => hasPadding && `
		padding: 0;

		@media ${device.laptop} {
			padding: 0 8%;
		}
	`)()};

	max-width: ${maxWidth ? maxWidth : `100%`};

	${(() => (isBanner || isHero) && `
		${isHero ? `min-height: 100vh;` : `min-height: 50vh;`}		
		text-align: ${textAlignmentSmall};

		@media ${device.tablet} {
			text-align: ${textAlignmentLarge};
		}

		p {
			@media ${device.mobileL} {
				line-height: 1.25;
			}
		}	
	`)()}
`;


const assessProps = (props) => `
	${generateBackground(props)}
	${generateLayout(props)}
`

export const SECTION = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	width: 100%;

	${props => assessProps(props)}

	${CLEARFIX}
`;
console.log('section/styles/', 'fin');
