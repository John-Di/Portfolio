import React from "react";
import ContentBlock from '../content-block';

export default function TextBlock({ backgroundColor = false, backgroundImage, textAlignmentSmall = 'center', textAlignmentLarge = 'center', children, isSquare = false, overlay = false, textColor }) {
  return (
    <ContentBlock
      className="text-block"
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      isSquare={isSquare}
      overlay={overlay}
      textColor={textColor}
      textAlignmentSmall={textAlignmentSmall}
      textAlignmentLarge={textAlignmentLarge}
    >
      {children}
    </ContentBlock>
  );
}
