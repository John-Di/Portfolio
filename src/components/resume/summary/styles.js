import styled from 'styled-components';
import {
	H2,
	P
} from '../../../layouts/resume-layout/styles';

export const HEADING = H2;

export const PARAGRAPH = styled(P)`
	margin: 0 auto;
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
