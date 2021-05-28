import {
  conditionalProp
} from '../utils/AssessProps';
import { ButtonReset, ListReset } from '../utils/Resets';
import { VerticalLine } from '../utils/Flex';
import BasicContrast from '../utils/BasicContrast';

export const ChicDropdownStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = false,
  textColor = '#000000',
  borderColor = false,
  accentColor
}) => `
  ${ListReset}
  ${VerticalLine}

  ${conditionalProp(maxWidth, `
    max-width: ${maxWidth};
  `)}

  ${conditionalProp(!modest.isModest, `border-width: 0.25em;`)}
  ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
  ${conditionalProp(textColor, `color: ${textColor};`)}
  border-top: 0;
  margin: 0;

  li {
    margin: 0;
  }

  button {
    ${ButtonReset}
    cursor: pointer;
    list-style: none;
    width: 100%;
    cursor: pointer;
    font-family: 'Roboto', 'Montserrat', serif;
    font-weight: normal;
    border-style: solid;
    min-width: 5em;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    transition: background-color 0.25s, color 0.25s;

    ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
    ${conditionalProp(textColor, `
      color: ${textColor};
      border-color: ${textColor};
    `)}

    ${conditionalProp(!modest.isModest, `border-width: 0.25em;`)}
    padding:${conditionalProp(modest.isModest, '0.25em 2em', `1em 2em`)};
    border-top: 0;
    border-bottom: 0;
    max-width: 100%;

    &:hover,
    &:focus {
      ${conditionalProp(textColor, `background-color: ${textColor};`)}
      ${conditionalProp(accentColor, `color: ${accentColor};`, conditionalProp(backgroundColor, `color: ${backgroundColor};`, `color: ${BasicContrast(textColor)};`))}
    }
  }
`;