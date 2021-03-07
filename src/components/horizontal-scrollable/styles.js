import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { FancyButtonStyles } from '../../styles/CTAs';
import { ListReset, ButtonReset } from '../../utils/Resets';

const BUTTON_WIDTH = 3;

export const SCROLLABLE = styled.div`
  position: relative;
  margin-top: ${props => props.gap}em;
  max-width: 100%;
  ${props => conditionalProp(props.buttonPadding, `padding: 0 ${BUTTON_WIDTH}em;`)}

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  ${Clearfix}

  nav {
    overflow: hidden;
    white-space: nowrap;

    ul {
      overflow-x: scroll;
      overflow-y: hidden;

      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const CONTROLS = styled.button`
  ${ButtonReset}
  cursor: pointer;
  padding: 0;
  min-width: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${BUTTON_WIDTH}em;
  ${props => conditionalProp(props.left, conditionalProp(props.buttonsInside, `left: 0;`, `right: 100%;`))}
  ${props => conditionalProp(props.right, conditionalProp(props.buttonsInside, `right: 0;`, `left: 100%;`))}
  transition: opacity 0.1s, background-color 0.1s, color 0.1s;
  opacity: 0.25;

  &:hover,
  &:focus {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: inherit;
    color: inherit;
  }
`;