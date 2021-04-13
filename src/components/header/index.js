import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import HeaderNavigation from '../header-navigation';
import React, {
  useRef,
  useEffect
} from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from '../../images/svgs/hamburger.svg';
import AccountIcon from '../../images/svgs/account.svg';
import CartIcon from '../../images/svgs/cart.svg';
import {
  HEADER,
  MENUITEM,
  NAVLINK,
  ICON,
  MAINMENU,
  MENUITEMS,
  UTIL,
  UTILLINK,
  TOGGLE
} from './styles';

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
    href: "/products/dummy-product",
    label: prod => prod ? prod.title : 'Dummy Product'
  }
];

const Header = ({
  location = {},
  isActive = false,
  isMenuOpen = false,
  onMenuToggle,
  accentColor,
  desktopNavAlignment,
  isStuck,
  setStickyState,
  hasCart = false,
  hasAccount = false
}) => {
  const product = location.state ? location.state.product : false;
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage || isActive;

  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  const headerEl = useRef(null);
  const drawerEl = useRef(null);

  const HandleScroll = () => {
    setStickyState(headerEl.current && document.documentElement.scrollTop > 0);
    window.addEventListener('scroll', HandleScroll);

    return () => {
      setStickyState(false);
      window.removeEventListener('scroll', HandleScroll);
    };
  };

  const HandleMenuClose = () => {

    function isValidHeaderTrigger({ target }) {
      let { current } = headerEl;
      return current.contains(target);
    }

    function handleClickOutside(event) {
      if (event.button !== 0 || isValidHeaderTrigger(event)) {
        return;
      }

      onMenuToggle(-1);
    }

    function handleKeyDown(event) {
      if (event.keyCode !== 27 || isValidHeaderTrigger(event)) {
        return;
      }

      onMenuToggle(-1);
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    };
  }

  useEffect(HandleScroll, []);
  useEffect(HandleMenuClose, [headerEl]);

  return (
    <HEADER
      isMenuOpen={isMenuOpen}
      textColor={textColor}
      accentColor={navAccent}
      textColorEmphasis={textColor}
      whiteOnHover={whiteOnHover}
      ref={headerEl}
      isStuck={isStuck}
      isActive={isActive}
    >
      <HeaderNavigation>
        <TOGGLE
          isActive={isMenuOpen}
          iconColor={isStuck || isActive ? `black` : textColor}
          iconColorEmphasis={navAccent}
          onClick={onMenuToggle.bind(this, 0)}
        >
          <HamburgerIcon />
        </TOGGLE>
        <MAINMENU
          ref={drawerEl}
          isMenuOpen={isMenuOpen}
          height={isMenuOpen ? drawerEl.current.scrollHeight : 0}
        >
          <MENUITEMS
            isMenuOpen={isMenuOpen}
            desktopNavAlignment={desktopNavAlignment}
          >
            {
              arrayToJSXList(nav, (item, i) => (
                <MENUITEM
                  textColor={textColor}
                  accentColor={navAccent}
                  textColorEmphasis={textColor}
                  whiteOnHover={whiteOnHover}
                  isActive={isActive}
                >
                  <NAVLINK
                    to={item.href}
                    onClick={onMenuToggle.bind(this, i + 1)}
                    activeClassName="active"
                    partiallyActive={true}
                    state={{
                      wasRedirected: true
                    }}
                  >
                    {item.label(product.title)}
                  </NAVLINK>
                </MENUITEM>
              ))
            }
          </MENUITEMS>
        </MAINMENU>
      </HeaderNavigation>
      <UTIL>
        <MENUITEMS
          isMenuOpen={isMenuOpen}
          desktopNavAlignment={'flex-end'}
        >
          {hasAccount &&
            <UTILLINK
              to={`/account/`}
              onClick={onMenuToggle.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              state={{
                wasRedirected: true
              }}
            >
              <AccountIcon />
            </UTILLINK>
          }
          {hasCart &&
            <UTILLINK
              to={`/cart/`}
              onClick={onMenuToggle.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              state={{
                wasRedirected: true
              }}
            >
              <CartIcon />
            </UTILLINK>
          }
        </MENUITEMS>
      </UTIL>
    </HEADER>
  )
}

export default React.memo(Header);