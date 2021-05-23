import styled from 'styled-components';
import { ChicButtonStyles } from '../../styles/CTAs';

const assessTheme = ({ theme, ...props }) => {
  switch (theme) {
    case 'chic':
    default:
      return ChicButtonStyles(props);
  }
};

export const BUTTON = styled.button`
	${assessTheme}
`;