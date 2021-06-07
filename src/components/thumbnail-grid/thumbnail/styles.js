import styled from 'styled-components';
import { conditionalProp } from '../../../utils/AssessProps';
import { ButtonReset } from '../../../utils/Resets';


export const THUMBNAIL = styled.button`
  ${ButtonReset}

  vertical-align: bottom;
  width: 100%;
  position: relative;

  ${props => conditionalProp(!props.isCurrent, `
    cursor: pointer;

    .gatsby-image-wrapper {
      transition: transform 0.15s ease-in 0s, opacity 0.15s ease-in 0s;
      transform: scale(0.85);
      opacity: 0.85;
    }

    &:focus,
    &:hover {
      .gatsby-image-wrapper {
        opacity: 1;
        transform: scale(1);
      }
    }

    .gatsby-image-wrapper {
      ${conditionalProp(props.transparency, `opacity : ${props.transparency};`)}
    }
  `, `
  `)}
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
