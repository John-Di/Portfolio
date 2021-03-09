import styled from 'styled-components';

export const COLUMN_STACKED = (resolution, image_above) => `
	@media screen and ${resolution} {
		flex-direction: ${!image_above ? 'column-reverse' : 'column'};
		max-width: 100%;
	}
`;

export const ADJACENT = (resolution, image_left) => `
	@media screen and ${resolution} {
		flex-direction: ${!image_left ? 'row-reverse' : 'row'};

		&::before {
			padding-top: 50%;
			max-width: 50%;
		}
	}
`;

export const TEXT_MEDIA_BLOCK = styled.div`
	width: 100%;
	flex: 1 100%;
	max-width: 100%;
	padding: 0;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	text-align: center;

	&::before {
		content: '';
	}
	${props => propAssess(props)}
`;

const propAssess = props => `
	${props.responsive_rules}
`
