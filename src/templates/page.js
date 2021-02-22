import React, {
  useState
} from "react";
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Header from '../components/header';
import Overlay from '../components/overlay';
import Page from '../layouts/page';

// styles
// const pageStyles = {
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
//   position: "relative"
// }

const PageTemplate = ({ accentColor, children, activeHeader = false }) => {
  const [menuIndex, SetMenuIndex] = useState(-1);

  let isScrollLocked = !!~menuIndex;



  const OnMenuToggle = (index) => {
    if ((menuIndex !== 0 && index >= 0) || index < 0) {
      SetMenuIndex(index);
    } else if (menuIndex === 0 && index === 0) {
      SetMenuIndex(-1);
    }
  };
  return (
    <Page
      isScrollLocked={isScrollLocked}
    >
      <Header
        isActive={activeHeader}
        isMenuOpen={isScrollLocked}
        accentColor={accentColor}
        onMenuToggle={OnMenuToggle}
      />
      {children}
      <Overlay
        isActive={isScrollLocked}
      />
    </Page>
  )
}

export default PageTemplate;
