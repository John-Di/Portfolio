import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool,
  randomImageArray
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
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];

const MemoizedHeaderNav = React.memo(HeaderNavigation);

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!ref || !callback || event.button !== 0) {
        return;
      }

      console.log("EVENT", event)

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode !== 27) {
        return;
      }

      console.log("EVENT", event)

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
}


const Header = ({ isMenuOpen = false, accentColor, desktopNavAlignment, setMenuIndex, menuIndex }) => {
  const [isSticky, setIsSticky] = useState(false);
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage;

  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  const onMenuToggle = index => {
    setMenuIndex(!!~index && index === menuIndex ? -1 : index);
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

  useOutsideAlerter(headerEl, () => setMenuIndex(-1));

  return (
    <HEADER
      isMenuOpen={isMenuOpen}
      textColor={textColor}
      accentColor={navAccent}
      textColorEmphasis={textColor}
      whiteOnHover={whiteOnHover}
      ref={headerEl}
      isSticky={isSticky}
    >
      <HeaderNavigation>
        <TOGGLE
          isActive={isMenuOpen}
          iconColor={isSticky ? `black` : textColor}
          iconColorEmphasis={navAccent}
          onClick={() => onMenuToggle(0)}
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
      </HeaderNavigation>
    </HEADER>
  )
}

export default React.memo(Header);