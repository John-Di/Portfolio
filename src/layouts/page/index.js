import React, {
  useContext
} from "react";
import BackToTop from '../../components/back-to-top';
import {
  PAGE
} from './styles';
import Header from '../../components/header';
import PageContext from "../../contexts/PageContext";
import QuickCart from "../../components/quick-cart";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import BasicOverlay from "../../components/basic-overlay";

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

const Page = ({ children }) => {

  const {
    scrollTop,
    isMenuOpen,
    mainRef,
    headerHeight
  } = useContext(PageContext)

  // console.log('menuIndex', menuIndex, isScrollLocked);
  return (
    <PAGE style={pageStyles}
      isLocked={isMenuOpen}
      scrollPosition={scrollTop}
      headerHeight={headerHeight}
    // ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <Header />
      <main ref={mainRef}>
        {/* <Breadcrumbs /> */}
        {children}
      </main>
      {useContext(CartFlyoutContext) && <BasicOverlay />}
      <QuickCart />
      <BackToTop isActive={scrollTop > 0} />
    </PAGE>
  )
}

export default Page;
