import styled from 'styled-components';
import { FancyButtonStyles } from '../../styles/CTAs';

const assessTheme = ({ theme, ...props }) => {
  switch (theme) {
    case 'fancy':
    default:
      return FancyButtonStyles(props);
  }
};

export const BUTTON = styled.button`
	${assessTheme}
`;