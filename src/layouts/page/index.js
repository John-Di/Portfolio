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
import Header from '../../components/header';
import PageContext from "../../contexts/PageContext";
import Overlay from "../../components/overlay";
import QuickCart from "../../components/quick-cart";

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
    <PAGE style={pageStyles}
      isLocked={isMenuOpen}
      scrollPosition={scrollTop}
    // ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <Overlay />
      <Header title={'Cart'} />
      <main ref={mainRef}>
        {children}
      </main>
      <QuickCart />
      <BackToTop isActive={scrollTop > 0} />
    </PAGE>
  )
}

export default Page;
