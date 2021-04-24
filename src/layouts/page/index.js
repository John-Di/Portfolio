import React, {
  useState,
  useRef,
  useEffect,
  useContext
} from "react";
import BackToTop from '../../components/back-to-top';
import {
  PAGE
} from './styles';
import HandleScrollLock from '../../utils/ScrollLock';
import PageContext from "../../contexts/PageContext";

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

const Page = ({ children }) => {

  const {
    scrollTop,
    isMenuOpen,
    mainRef
  } = useContext(PageContext);

  // console.log('menuIndex', menuIndex, isScrollLocked);
  return (
    <PAGE
      isLocked={isMenuOpen}
      scrollPosition={scrollTop}
    // ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <main ref={mainRef} style={pageStyles}>
        {children}
      </main>
      <BackToTop isActive={scrollTop > 0} />
    </PAGE>
  )
}

export default Page;
