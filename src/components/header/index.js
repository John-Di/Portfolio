import MegaMenu from '../mega-menu';
import ContentBlock from '../content-block';
import Section from '../section';
import ResponsivePair from '../../layouts/responsive-pair';
import {
  jsxCloneArray,
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import React, {
  useState,
  useRef,
  createRef,
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
    setIsSticky(document.documentElement.scrollTop > 0);
  };

  useEffect(() => {
    const cachedRef = headerEl.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { rootMargin: `-1px 0px 0px 0px`, threshold: [1] }
      )

    observer.observe(cachedRef)
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.unobserve(cachedRef)
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
          iconColor={textColor}
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