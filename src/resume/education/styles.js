import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { device } from '../../../utils/variables';
import {
	H2,
	DIVIDER
} from '../../../layouts/resume-layout/styles';

export const HEADING = H2;
export const HR = DIVIDER;

export const DEGREES = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
