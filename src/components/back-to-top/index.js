import React from "react";
import UpArrow from '../../images/svgs/arrow-up-thin.svg';
import {
  WRAPPER,
  TRIGGER
} from './styles';

export default function BackToTop({ isActive = false, lineColor = `#000000`, backgroundColor }) {

  const GoBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <WRAPPER className={`back-to-top`} isActive={isActive}>
      <TRIGGER
        isActive={isActive}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        title={`Back to Top`}
        onClick={GoBackToTop}>
        <UpArrow />
      </TRIGGER>
    </WRAPPER>
  );
}