import React, {
  useState
} from "react";
import Header from '../components/header';
import Overlay from '../components/overlay';
import Page from '../layouts/page';

const PageTemplate = ({ accentColor, children, activeHeader = false, hasCart = false }) => {
  const [menuIndex, SetMenuIndex] = useState(-1);
  const [isStuck, setStickyState] = useState(false);

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
      accentColor={accentColor}
      wasScrolled={isStuck}
      isScrollLocked={isScrollLocked}
    >
      <Header
        isActive={activeHeader}
        isMenuOpen={isScrollLocked}
        accentColor={accentColor}
        onMenuToggle={OnMenuToggle}
        isStuck={isStuck}
        setStickyState={setStickyState}
        hasCart={hasCart}
      />
      {children}
      <Overlay
        isActive={isScrollLocked}
      />
    </Page>
  )
}

export default PageTemplate;
