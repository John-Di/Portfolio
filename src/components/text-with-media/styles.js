import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/randoms';

export const TEXT_WITH_MEDIA = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	`};

	
	${props => props.backgroundImage && `
		display: flex;
		flex: 1 100%;
		max-width: 100%;
		padding: 0;
		
		&::${props.image_first ? `before` : `after`} {
			content: '';
			background-image: url('${props.backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			padding-top: 100%;
			width: 100%;
		}
	`};
`;

export const WRAPPER = styled.div`
	flex: 1 auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export const CONTENT = styled.div`
	padding: 0 1em;
`;

const createContainer = (resolution, num_cols = 1, props, horizontal = true) => INNER(
	resolution,
	props.image_first ? `before` : `after`,
	`row${props.reversed ? `-reverse` : ``}`,
	100 / num_cols,
	horizontal
);

const INNER = (resolution, image_first, direction, max_width, horizontal) => `
	@media ${resolution} {
		float: left;
		display: inline-flex;
		align-items: stretch;
		max-width: ${max_width}%;

		&::${image_first} {
			flex: 1 50%;
		}

		> div {
			flex: 1 50%;
			width: 100%;

			> div {
				padding: 0 8%;
			}
		}

		${horizontal ? `
			flex-direction: ${direction};
			
			&::${image_first} {
				max-width: 50%;
				min-height: 100%;
				padding-top: 0;
			}

			> div {
				max-width: 50%;
			}
		` : `
			flex-direction: column;
			&:nth-child(even) {
				flex-direction: column-reverse;
			}			
			
			&::${image_first} {
				max-height: 100%;
				padding-top: 100%;
			}

			> div {
				max-height: 100%;
				padding: 0;
				padding-top: 100%;
				position: relative;

				> div {
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
				}
			}
		`}
	}
`;

const test = (r, c, p, h) => {
	let a = createContainer(r, c, p, h)
	console.log(a);
	return a;
}

const simpleResponsive = (length, props, res) => props.backgroundImage ? createContainer(res, length, props) : '';
const multiResponsive = (length, props) => `
	${props.backgroundImage ? createContainer(`${device.mobileL} and ${device.max_tablet}`, 1, props) : ''}
	${props.backgroundImage ? createContainer(`${device.tablet} and ${device.max_laptop}`, length, props, false) : ''}
	${props.backgroundImage ? createContainer(`${device.laptop} and ${device.max_laptopL}`, 1, props) : ''}
	${props.backgroundImage ? createContainer(device.laptopL, length, props) : ''}
`

export const SINGLE = styled(TEXT_WITH_MEDIA)`
	${props => simpleResponsive(1, props, device.mobileL)};
`;

export const DOUBLE = styled(TEXT_WITH_MEDIA)`
	${props => multiResponsive(2, props)};
`;

export const TRIPLE = styled(TEXT_WITH_MEDIA)`
	${props => multiResponsive(3, props)};
`;

export const QUAD = styled(TEXT_WITH_MEDIA)`
	${props => multiResponsive(4, props)};
`;
