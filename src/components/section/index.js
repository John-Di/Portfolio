import React from "react";
import { size } from '../../utils/variables';
import {
  SECTION,
  HEADING
} from './styles';

let maxWidth_DEFAULT = `${size.laptopL}px`;

export default function Section({ children,
  className,
  maxWidth = maxWidth_DEFAULT,
  hasMarginSmall = true,
  hasMarginLarge = true,
  backgroundImage = false,
  backgroundColor = false,
  hasPadding,
  heading,
  preheading,
  subheading,
  textAlignmentSmall = 'center',
  textAlignmentLarge = 'center',
  heightSmall = false,
  heightLarge = false,
  isBanner = false,
  isHero = false }) {
  return (
    <SECTION
      className={className}
      maxWidth={maxWidth}
      backgroundImage={backgroundImage}
      hasMarginSmall={hasMarginSmall}
      hasMarginLarge={hasMarginLarge}
      heightSmall={heightSmall}
      heightLarge={heightLarge}
      hasPadding={hasPadding}
      backgroundColor={backgroundColor}
      isBanner={isBanner || isHero}
      isHero={isHero}
    >
      {
        (heading || subheading || preheading) &&
        <HEADING className="section-heading" textAlignmentSmall={textAlignmentSmall} textAlignmentLarge={textAlignmentLarge}>
          {preheading}
          {heading}
          {subheading}
        </HEADING>
      }
      {children}
    </SECTION>
  )
}
