import { useContext } from 'react';
import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import {
  PropMap,
  conditionalProp
} from '../../utils/AssessProps';
import { ButtonReset, LinkReset } from '../../utils/Resets';
import SiteThemeContext from '../../contexts/SiteThemeContext';

const FancyButtonStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = '#ffffff',
  primaryColor = '#000000',
  borderColor = false,
  accentContrast
}) => `

  ${conditionalProp(maxWidth, `
    max-width: ${maxWidth};
  `)}

  ${conditionalProp(!modest.isModest, `border-width: 0.25em;`)}
  padding:${conditionalProp(modest.isModest, '0.25em 2em', `0.75em 2em`)};

  ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
  ${conditionalProp(accentContrast, `color: ${accentContrast};`)}
  ${conditionalProp(borderColor, `border-color: ${borderColor};`)}

  &:hover,
  &:focus {
    ${conditionalProp(accentContrast, `background-color: ${accentContrast};`)}
    ${conditionalProp(primaryColor, `color: ${primaryColor};`, conditionalProp(backgroundColor, `color: ${backgroundColor};`, `color: ${accentContrast};`))}
    ${conditionalProp(primaryColor, `border-color: ${primaryColor};`)}
  }
`;

const AssessProps = (props) => FancyButtonStyles({
  ...useContext(SiteThemeContext),
  ...props
});

const ButtonStyles = `
  display: inline-block;
  cursor: pointer;
  ${ButtonReset}
  font-family: 'Roboto', 'Montserrat', serif;
  font-weight: normal;
  border-style: solid;
  min-width: 5em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  transition: background-color 0.1s, color 0.1s;
`

export const BUTTON = styled.button`
  ${ButtonStyles}
  ${PropMap.bind(this, null)}
`;

export const LINK = styled(GatsbyLink)`
  ${LinkReset}
  ${ButtonStyles}
  ${PropMap.bind(this, null)}
`;

export const EXTERNAL = styled.a`
  ${LinkReset}
  ${ButtonStyles}
  ${PropMap.bind(this, null)}
`;