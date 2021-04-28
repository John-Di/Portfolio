import {
  arrayToJSXList
} from '../../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../../../utils/randoms';
import IdealTextColor from '../../../utils/IdealTextColor';
import HamburgerIcon from '../../../images/svgs/hamburger.svg';
import React, {
  useContext
} from "react";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import {
  NAV,
  ITEM,
  LINK,
  MENU,
  ITEMS,
  TOGGLE
} from './styles';
import ThemeContext from '../../../contexts/ThemeContext';
import ProductContext from '../../../contexts/ProductContext';

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
    href: "/products/color-cookie-hoodie",
    label: prod => prod && prod.title ? prod.title : 'Color Cookie Hoodie'
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
    store
  } = useContext(ShopContext), {
    isStuck,
    isMenuOpen,
    drawerRef,
    cartIsEmpty,
    selectMenuItem,
    toggleMenu
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  console.log("MainNavigation", store);
  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  return (
    <NAV>
      <TOGGLE
        isActive={isMenuOpen}
        iconColor={isStuck || isActive ? `black` : textColor}
        iconColorEmphasis={navAccent}
        onClick={toggleMenu}
      >
        <HamburgerIcon />
      </TOGGLE>
      <MENU
        ref={drawerRef}
        isMenuOpen={isMenuOpen}
        height={isMenuOpen ? drawerRef.current.scrollHeight : 0}
      >
        <ITEMS
          isMenuOpen={isMenuOpen}
          desktopNavAlignment={desktopNavAlignment}
        >
          {
            arrayToJSXList(nav, (item, i) => {
              if (!item || !item.href) {
                return;
              }
              console.log('item.href', item.href)
              return (
                <ITEM
                  textColor={textColor}
                  accentColor={navAccent}
                  textColorEmphasis={textColor}
                  whiteOnHover={whiteOnHover}
                  isActive={isActive}
                >
                  <LINK
                    to={item.href}
                    onClick={selectMenuItem.bind(this, i + 1)}
                    activeClassName="active"
                    partiallyActive={true}
                    state={{
                      wasRedirected: true,
                      store,
                      checkout: store.checkout,
                      cartIsEmpty,
                      label: item.label(title)
                    }}
                  >
                    {item.label(title)}
                  </LINK>
                </ITEM>
              )
            })
          }
        </ITEMS>
      </MENU>
    </NAV>
  )
}

export default MainNavigation;