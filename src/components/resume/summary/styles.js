import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { H2 } from '../../../layouts/resume-layout/styles';

export const HEADING = H2;

export const P = styled.p`
	margin: 0 auto;
    margin-top: calc(1.3125em - 1px);
	width: 100%;
`;

export const PARENT_TRIGGER = {
	'marginTop': 0,
	'cursor': 'pointer'
};

export const CHILD_TRIGGER = {
	"cursor": "pointer",
	"margin": `0 auto 0.984375em`,
	"width": "100%"
};
