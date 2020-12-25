import styled from 'styled-components';
import { size } from '../../utils/variables';
import { SECTION } from '../section/styles';
import { CONTAINER } from '../../components/text-with-media/styles';

SECTION.hasPadding = true;
export const FULL_WIDTH_PADDED_SECTION = styled(SECTION)`
	max-width: ${size.laptopL}px;
`;
