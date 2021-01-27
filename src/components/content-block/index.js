import React from "react";
import {
  BLOCK,
  CONTAINER,
  CONTENT
} from './styles';

export default function ContentBlock({ whiteOnHover, backgroundColor = false, backgroundImage, textAlignmentSmall = 'center', textAlignmentLarge = 'center', children, isSquare, overlay = false, textColor }) {
  return (
    <BLOCK
      className="content-block"
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      isSquare={isSquare}
      overlay={overlay}
      whiteOnHover={whiteOnHover}
    >
      <CONTAINER
        className="content-block__container"
        overlay={overlay || isSquare}
      >
        <CONTENT
          className="content-block__content"
          backgroundColor={backgroundColor}
          textColor={textColor}
          textAlignmentSmall={textAlignmentSmall}
          textAlignmentLarge={textAlignmentLarge}
        >
          {children}
        </CONTENT>
      </CONTAINER>
    </BLOCK>
  );
}
