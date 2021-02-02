import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
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
  NAV,
  UL,
  LI,
  NAVLINK,
  ICON,
  DIV,
  TOGGLE
} from './styles';

const nav = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];

const Header = ({ accentColor, whiteOnHover, desktopNavAlignment }) => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const [isSticky, setIsSticky] = useState(false);
  const updateMenuIndex = index => setMenuIndex(!!~index && index === menuIndex ? -1 : index);

  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  const onMenuToggle = index => {
    updateMenuIndex(index);
    return menuIndex;
  };

  const headerEl = useRef(null);
  const drawerEl = useRef(null);

  const handleScroll = () => {
    setIsSticky(headerEl.current && document.documentElement.scrollTop > 0);
  };

  useEffect(() => {
    setIsSticky(headerEl.current && document.documentElement.scrollTop > 0);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <HEADER
      isMenuOpen={!!~menuIndex}
      textColor={textColor}
      accentColor={navAccent}
      textColorEmphasis={textColor}
      whiteOnHover={whiteOnHover}
      ref={headerEl}
      isSticky={isSticky}
    >
      <NAV>
        <TOGGLE
          isActive={!!~menuIndex}
          iconColor={isSticky ? `black` : textColor}
          iconColorEmphasis={navAccent}
          onClick={() => onMenuToggle(0)}
        >
          <ICON icon={faBars} />
        </TOGGLE>
        <DIV
          ref={drawerEl}
          isMenuOpen={!!~menuIndex}
          height={!!~menuIndex ? drawerEl.current.scrollHeight : 0}
        >
          <UL
            isMenuOpen={!!~menuIndex}
            desktopNavAlignment={desktopNavAlignment}
          >
            {
              arrayToJSXList(nav, (item, i) => (
                <LI
                  textColor={textColor}
                  accentColor={navAccent}
                  textColorEmphasis={textColor}
                  whiteOnHover={whiteOnHover}
                >
                  <NAVLINK
                    to={item.href}
                    onClick={() => onMenuToggle(i + 1)}
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
      </NAV>
    </HEADER>
  )
}

export default Header;