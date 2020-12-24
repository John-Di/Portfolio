import styled from 'styled-components';
import { device } from '../../utils/variables';
import { CLEARFIX } from '../../layouts/resume-layout/styles';
import { SECTION } from '../section/styles';

SECTION.hasPadding = true;
export const FULL_WIDTH_PADDED_SECTION = styled(SECTION)`
	max-width: ${device.laptopL};
`;
