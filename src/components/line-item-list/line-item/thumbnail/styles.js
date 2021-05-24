import styled from 'styled-components';
import { conditionalProp } from '../../../../utils/AssessProps';
import { ButtonReset } from '../../../../utils/Resets';


export const THUMBNAIL = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
    width: 100%;
  }
`;

export const IMG = styled.img`
  display: block;
  max-width: 100%;
  vertical-align: bottom;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  height: 100%;
  transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;
`
