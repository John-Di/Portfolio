import {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback
} from "react";
import ShopContext from '../contexts/ShopContext';
import HandleScrollLock from '../utils/ScrollLock';

function usePageNavigation() {
  const {
    store
  } = useContext(ShopContext);

  const [menuIndex, SetMenuIndex] = useState(-1);
  const [isStuck, SetStickyState] = useState(false);
  const [scrollTop, SaveScrollTop] = useState(0);

  let isScrollLocked = !!~menuIndex;

  const selectMenuItem = index => ((menuIndex !== 0 && index >= 0) || index < 0) && SetMenuIndex(index),
    toggleMenu = () => menuIndex === 0 && SetMenuIndex(0),
    closeMenu = () => SetMenuIndex(-1);

  const headerRef = useRef(null)
  const mainRef = useRef(null);
  const drawerRef = useRef(null);

  const HandleScroll = () => {
    SetStickyState(headerRef.current && document.documentElement.scrollTop > 0);
    window.addEventListener('scroll', HandleScroll);

    return () => {
      SetStickyState(false);
      window.removeEventListener('scroll', HandleScroll);
    };
  };

  const HandleMenuClose = () => {

    function isValidHeaderTrigger({ target }) {
      let { current } = headerRef;
      return current.contains(target);
    }

    function handleClickOutside(event) {
      if (event.button !== 0 || isValidHeaderTrigger(event)) {
        return;
      }

      closeMenu();
    }

    function handleKeyDown(event) {
      if (event.keyCode !== 27 || isValidHeaderTrigger(event)) {
        return;
      }

      closeMenu();
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

  // useEffect(HandleScroll, [document.documentElement.scrollTop]);
  useEffect(HandleMenuClose, [drawerRef.current && drawerRef.current.scrollHeight]);
  // useEffect(HandleScrollLock.bind(this, mainRef, SaveScrollTop), [isScrollLocked]);

  return {
    isStuck,
    scrollTop,
    SaveScrollTop,
    isMenuOpen: isScrollLocked,
    headerRef,
    drawerRef,
    mainRef,
    cartIsEmpty: !store.checkout.lineItems.length,
    selectMenuItem,
    toggleMenu,
    closeMenu
  };
}

export default usePageNavigation;