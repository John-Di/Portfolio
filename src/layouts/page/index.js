import React, {
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
import ThemeContext from '../../contexts/ThemeContext';
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

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
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  // console.log('menuIndex', menuIndex, isScrollLocked);
  return (
    <PAGE style={pageStyles}
      isLocked={isMenuOpen}
      scrollPosition={scrollTop}
      accentColor={accentColor}
    // ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <Header />
      <main ref={mainRef}>
        {children}
      </main>
      {useContext(CartFlyoutContext) && <Overlay />}
      <QuickCart />
      <BackToTop isActive={scrollTop > 0} />
    </PAGE>
  )
}

export default Page;
