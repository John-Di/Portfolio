import styled from 'styled-components';
import { ButtonReset, ListReset } from '../../../utils/Resets';



export const LIST = styled.div`
  margin: -0.5em 0;

  ul {
    ${ListReset}
  }

  li {
    ${ListReset}
    margin: 0.5em 0;
  }
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
`;

export const SPAN = styled.span`
`;
