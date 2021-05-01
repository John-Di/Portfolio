import styled from 'styled-components';
import { conditionalProp } from '../../../../../utils/AssessProps';
import { ButtonReset } from '../../../../../utils/Resets';


export const THUMBNAIL = styled.button`
  ${ButtonReset}
  vertical-align: bottom;
  width: 100%;
  position: relative;

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

  .current & {
    transform: scale(1);
  }
`
