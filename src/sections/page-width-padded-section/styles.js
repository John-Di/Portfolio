import styled from 'styled-components';
import { size } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';
import { SECTION } from '../section/styles';

SECTION.hasPadding = true;
export const PAGE_WIDTH_PADDED_SECTION = styled(SECTION)`
	max-width: ${size.laptopL}px;
`;
