import styled from 'styled-components';
import {
  conditionalProp
} from '../utils/AssessProps';
import { ButtonReset } from '../utils/Resets';
import BasicContrast from '../utils/BasicContrast';
import { useContext } from 'react';
import SiteThemeContext from '../contexts/SiteThemeContext';


const ChicButtonStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = false,
  textColor = '#000000',
  borderColor = false,
  accentColor
}) => `

  ${conditionalProp(maxWidth, `
    max-width: ${maxWidth};
  `)}

  ${conditionalProp(!modest.isModest, `border-width: 0.25em;`)}
  padding:${conditionalProp(modest.isModest, '0.25em 2em', `0.75em 2em`)};

  ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
  ${conditionalProp(textColor, `color: ${textColor};`)}
  ${conditionalProp(borderColor, `border-color: ${borderColor};`)}

  &:hover,
  &:focus {
    ${conditionalProp(textColor, `background-color: ${textColor};`)}
    ${conditionalProp(accentColor, `color: ${accentColor};`, conditionalProp(backgroundColor, `color: ${backgroundColor};`, `color: ${BasicContrast(textColor)};`))}
    ${conditionalProp(textColor, `border-color: ${textColor};`)}
  }
`;

const AssessProps = (props) => ChicButtonStyles(useContext(SiteThemeContext))

export const BUTTON = styled.button`
  cursor: pointer;
  ${ButtonReset}
  font-family: 'Roboto', 'Montserrat', serif;
  font-weight: normal;
  border-style: solid;
  min-width: 5em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  transition: background-color 0.25s, color 0.25s;

  ${AssessProps}
`