import React from "react";
import Section from '../../components/section';
import BasicContrast from '../../utils/BasicContrast';

export default function HeroBanner({ children, textColor = "#000000", backgroundColor = false, backgroundImage, maxWidth = '100%' }) {

  textColor = textColor ? textColor : backgroundColor && BasicContrast(backgroundColor);
  return (
    <Section
      className="hero-banner"
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      textColor={textColor}
      hasMarginSmall={false}
      hasMarginLarge={false}
      hasPadding={false}
      isHero={true}
      maxWidth={maxWidth}
    >
      {children}
    </Section>
  )
}
