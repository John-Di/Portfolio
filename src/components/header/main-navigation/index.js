import {
  arrayToJSXList
} from '../../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../../../utils/randoms';
import BasicContrast from '../../../utils/BasicContrast';
import HamburgerIcon from '../../../images/svgs/hamburger.svg';
import React, {
  useContext
} from "react";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import {
  NAV,
  ITEM,
  MENU,
  ITEMS,
  TOGGLE
} from './styles';
import SiteThemeContext from '../../../contexts/SiteThemeContext';
import TextLink from "../text-link";
import MobileMenuFlyoutContext from '../../../contexts/MobileMenuFlyoutContext';

const nav = [
  {
    href: "/resume/",
    label: () => "Resume"
  },
  {
    href: "/style-guide/",
    label: () => "Style Guide"
  },
  {
    href: "/products/full-strawberry-tee",
    label: prod => prod && prod.title ? prod.title : 'Full Strawberry Tee'
  }
];

const MainNavigation = ({
  isActive = false,
  desktopNavAlignment,
  title
}) => {
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage || isActive;

  const {
    isStuck,
    mobileNavHeight,
    drawerRef
  } = useContext(PageContext), {
    isOpen,
    toggleFlyout
  } = useContext(MobileMenuFlyoutContext);


  return (
    <MENU>
      <TOGGLE
        isActive={isOpen}
        onClick={toggleFlyout}
      >
        <HamburgerIcon />
      </TOGGLE>
      <NAV
        ref={drawerRef}
        isMenuOpen={isOpen}
        flyoutHeight={mobileNavHeight}
      >
        <ITEMS
          isMenuOpen={isOpen}
          flyoutHeight={mobileNavHeight}
          desktopNavAlignment={desktopNavAlignment}
        >
          {
            arrayToJSXList(nav, (item, i) => {
              if (!item || !item.href) {
                return;
              }

              return (
                <ITEM
                  whiteOnHover={whiteOnHover}
                  isActive={isActive}
                >
                  <TextLink
                    index={i + 1}
                    label={item.label(title)}
                    href={item.href} />
                </ITEM>
              )
            })
          }
        </ITEMS>
      </NAV>
    </MENU>
  )
}

export default MainNavigation;