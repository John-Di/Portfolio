import styled from 'styled-components';
import { ListReset } from '../../../../utils/Resets';

export const THUMBNAIL = styled.div`
  width: 100%;
`;

export const IMG = styled.img`
  display: block;
  max-width: 100%;
  vertical-align: bottom;
  width: 100%;
  transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;
`

export const OPTIONS = styled.dl`
  ${ListReset}
  display: flex;
  margin: 0.75em -0.25em -0.25em;
`;

export const DESCRIPTION = styled.div`
  padding: 0 0.25em 0.25em;
`;


export const NAME = styled.dt`
  ${ListReset}
  font-weight: bold;
  font-size: 0.75em;
  margin-bottom: 0.25em;
`;


export const SWATCH = styled.dd`
  ${ListReset}
  label {
    height: 1.5em;

    span {
      font-size: 0.75em;
    }
  }
`;

