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
  useState,
  useRef,
  useEffect
} from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  HEADER,
  // NAV,
  UL,
  LI,
  NAVLINK,
  ICON,
  DIV,
  TOGGLE
} from './styles';

const nav = [
  {
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];

const Header = ({ isActive = false, isMenuOpen = false, onMenuToggle, accentColor, desktopNavAlignment }) => {
  const [isSticky, setIsSticky] = useState(false);
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage || isActive;

  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  const headerEl = useRef(null);
  const drawerEl = useRef(null);

  const HandleScroll = () => {
    setIsSticky(headerEl.current && document.documentElement.scrollTop > 0);
    window.addEventListener('scroll', HandleScroll);

    return () => {
      window.removeEventListener('scroll', () => HandleScroll);
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
      isSticky={isSticky}
      isActive={isActive}
    >
      <HeaderNavigation>
        <TOGGLE
          isActive={isMenuOpen}
          iconColor={isSticky ? `black` : textColor}
          iconColorEmphasis={navAccent}
          onClick={onMenuToggle.bind(this, 0)}
        >
          <ICON icon={faBars} />
        </TOGGLE>
        <DIV
          ref={drawerEl}
          isMenuOpen={isMenuOpen}
          height={isMenuOpen ? drawerEl.current.scrollHeight : 0}
        >
          <UL
            isMenuOpen={isMenuOpen}
            desktopNavAlignment={desktopNavAlignment}
          >
            {
              arrayToJSXList(nav, (item, i) => (
                <LI
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
                    state={{
                      wasRedirected: true
                    }}
                  >
                    {item.label}
                  </NAVLINK>
                </LI>
              ))
            }
          </UL>
          {/* {megaMenu} */}
        </DIV>
      </HeaderNavigation>
    </HEADER>
  )
}

export default React.memo(Header);