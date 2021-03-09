import IdealTextColor from './IdealTextColor';
import { device } from './variables';

const AssessProps = props => `
  ${AssessBackground(props)}
  ${conditionalProp(props.borderColor, renderBorder(props.borderColor))}
  ${renderText(props)}
`;

const AssessBackground = ({
  backgroundImage,
  backgroundColor
}) => `
  ${conditionalProp(backgroundColor, `background-color: ${backgroundColor};`)}
  ${conditionalProp(backgroundImage, renderBackgroundImage(backgroundImage))}
`;

export const conditionalProp = (prop, styles, fallback = ``) => prop ? styles : fallback;

const renderBackgroundImage = image => `
  background-image: url('${image}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const renderBorder = (color, width = 1) => `
  border-color: ${color};
  border-width: ${width}px;
`;

export const renderText = ({ textColor, backgroundColor, textAlignmentSmall = 'center', textAlignmentLarge = 'center' }) => `
  ${conditionalProp(textColor, `color: ${textColor}`, conditionalProp(backgroundColor, `color: ${IdealTextColor(backgroundColor)};
  `))}
  ${conditionalProp(textAlignmentSmall, `text-align: ${textAlignmentSmall};`)}

  @media screen and ${device.tablet} {
    ${conditionalProp(textAlignmentLarge, `text-align: ${textAlignmentLarge};`)}
  }
`;

export default AssessProps;