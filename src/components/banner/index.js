import React from "react";
import { HERO_BANNER } from './styles';
import Section from '../section';
import BasicContrast from '../../utils/BasicContrast';

export default function Banner({ children, textColor = "#000000", backgroundColor = false, backgroundImage }) {

  textColor = textColor ? textColor : backgroundColor && BasicContrast(backgroundColor);
  return (
    <Section
      className="banner"
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      textColor={textColor}
      hasMarginSmall={false}
      hasMarginLarge={false}
      hasPadding={false}
      isBanner={true}
    >
      {children}
    </Section>
  )
}
