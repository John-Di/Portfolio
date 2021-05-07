import styled from 'styled-components';
import { conditionalProp } from '../../../utils/AssessProps';
import { ButtonReset } from '../../../utils/Resets';


export const THUMBNAIL = styled.button`
  ${ButtonReset}
  vertical-align: bottom;
  width: 100%;

  ${props => conditionalProp(!props.isCurrent, `
    cursor: pointer;

    img {
      transform: scale(0.85);
    }

    &:focus,
    &:hover {
      img {
        opacity: 1;
        transform: scale(1);
      }
    }

    img {
      ${conditionalProp(props.transparency, `opacity : ${props.transparency};`)}
    }
  `, `
  `)}
`;

export const IMG = styled.img`
  display: block;
  max-width: 100%;
  margin: 0;
  vertical-align: bottom;
  width: 100%;
  transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;

  .current & {
    transform: scale(1);
  }
`
