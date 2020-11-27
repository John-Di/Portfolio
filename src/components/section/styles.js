import styled from 'styled-components';
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography";
import { device } from '../../utils/variables';


export const SECTION = styled.section`
	margin: 0 auto;
	max-width: 100%;
	padding: 0 3.28125em;
	min-height: 350px;

	@media ${device.laptop} {
		padding: 0 7%;
	} 

	${props => props.background && `
		background-image: url(${props.background});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	`};
`;
