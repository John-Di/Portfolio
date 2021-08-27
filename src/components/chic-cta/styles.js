import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import AssessProps, {
  PropMap,
  conditionalProp
} from '../../utils/AssessProps';
import { ButtonReset, LinkReset } from '../../utils/Resets';
import BasicContrast from '../../utils/BasicContrast';

const ChicButtonStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = null,
  primaryColor = '#000000',
}) => `

  ${conditionalProp(maxWidth, `
    max-width: ${maxWidth};
  `)}

  ${AssessProps({
  backgroundColor,
  borderColor: '#000000',
  textColor: '#000000',
  borderWidth: '0.25em'
})}

  padding:${conditionalProp(modest.isModest, '0.25em 2em', `0.75em 2em`)};

  &:hover,
  &:focus {
    ${AssessProps({
  backgroundColor,
  borderColor: primaryColor,
  textColor: primaryColor,
  borderWidth: '0.25em'
})}
  }
`;


const LightChicButtonStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = null,
  primaryColor = '#000000',
}) => `

  ${conditionalProp(maxWidth, `
    max-width: ${maxWidth};
  `)}

  ${AssessProps({
  backgroundColor,
  borderColor: '#000000',
  textColor: '#000000',
  borderWidth: '0.25em'
})}

  padding:${conditionalProp(modest.isModest, '0.25em 2em', `0.75em 2em`)};

  &:hover,
  &:focus {
    ${AssessProps({
  backgroundColor: primaryColor,
  borderColor: BasicContrast(primaryColor),
  textColor: BasicContrast(primaryColor),
  borderWidth: '0.25em'
})}
  }
`;

const ButtonStyles = `
  display: inline-block;
  cursor: pointer;
  ${ButtonReset}
  font-family: 'Open Sans', 'Roboto', 'Montserrat', serif;
  font-size: 14px;
  font-weight: bold;
  border-style: solid;
  min-width: 5em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  transition: background-color 0.25s 0s, color 0.25s 0s, border-color 0.25s 0s;
`

export const BUTTON = styled.button`
  ${ButtonStyles}
  ${PropMap.bind(this, ChicButtonStyles)}
`;

export const LINK = styled(GatsbyLink)`
  ${LinkReset}
  ${ButtonStyles}
  ${PropMap.bind(this, ChicButtonStyles)}
`;

export const LIGHTLINK = styled(GatsbyLink)`
  ${LinkReset}
  ${ButtonStyles}
  ${PropMap.bind(this, LightChicButtonStyles)} 
`;

export const EXTERNAL = styled.a`
  ${LinkReset}
  ${ButtonStyles}
  ${PropMap.bind(this, ChicButtonStyles)}
`;