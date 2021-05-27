import { useContext } from 'react';
import SiteThemeContext from '../contexts/SiteThemeContext';
import BasicContrast from './BasicContrast';
import { device } from './variables';

const AssessProps = ({ borderColor, borderWidth, ...props }) => `
  ${AssessBackground(props)}
  ${conditionalProp(borderColor, renderBorder(borderColor, borderWidth))}
  ${renderText(props)}
`;

export const PropMap = (ApplyRules = AssessProps, props) => ApplyRules({
  ...useContext(SiteThemeContext),
  ...props
})

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

const renderBorder = (color, width = `1px`) => `
  border-color: ${color};
  ${conditionalProp(width, `border-width: ${width};`)}

`;

export const renderText = ({ textColor, backgroundColor, textAlignmentSmall = 'center', textAlignmentLarge = 'center' }) => `
  ${conditionalProp(textColor, `color: ${textColor};`, conditionalProp(backgroundColor, `color: ${BasicContrast(backgroundColor)};
  `))}
  ${conditionalProp(textAlignmentSmall, `text-align: ${textAlignmentSmall};`)}

  @media screen and ${device.tablet} {
    ${conditionalProp(textAlignmentLarge, `text-align: ${textAlignmentLarge};`)}
  }
`;

export default AssessProps;