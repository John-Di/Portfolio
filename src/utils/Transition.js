import { conditionalProp } from './AssessProps';

const Transition = ({
  backgroundColor,
  backgroundImage,
  textColor,
  borderColor,
  accentColor,
  textColorEmphasis,
  isBold = false,
  transition,
  states = [`&:hover`],
  onState = ``
}) => `
  ${conditionalProp(backgroundColor, `background-color: transparent;`)}
  ${conditionalProp(textColor, `color: ${textColor};`)}
  ${conditionalProp(borderColor, `border-color: transparent;`)}

  ${states.join(',')} {
    ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
    ${conditionalProp(textColor, `color: ${textColorEmphasis};`)}
    ${conditionalProp(borderColor, `border-color: ${borderColor};`)}
    ${onState}
  }

  ${conditionalProp(transition, `transition: ${transition};`)}
  ${conditionalProp(isBold, `font-weight: bold;`)}
`;

export default Transition;