import React, {
  useState,
  useRef,
  useEffect
} from "react";
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Header from '../../components/header';
import Overlay from '../../components/overlay';
import {
  PAGE
} from './styles';

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

const Page = ({ accentColor, children }) => {
  const [menuIndex, SetMenuIndex] = useState(-1);
  const [scrollTop, SaveScrollTop] = useState(document.documentElement.scrollTop);

  // const pageEl = useRef(null);
  const mainEl = useRef(null);

  let isScrollLocked = !!~menuIndex;

  const Lock = () => {
    // console.log('Lock', document.documentElement.scrollTop, window.pageYOffset);
    mainEl.current.style.top = -scrollTop + 'px';
    document.documentElement.classList.add('scroll-lock');
    document.body.classList.add('scroll-lock');
  }

  const Unlock = () => {
    SaveScrollTop(document.documentElement.scrollTop);
    // console.log('Unlock', document.documentElement.scrollTop, window.pageYOffset);
    document.documentElement.classList.remove('scroll-lock');
    document.body.classList.remove('scroll-lock');
  }

  const HandleScrollLock = () => {
    if (!mainEl) {
      return;
    }
    // console.log('HandleScrollLock headerIsActive', !isScrollLocked);
    // !isScrollLocked ? Unlock() : Lock();
  };


  const OnMenuToggle = (index) => {
    if ((menuIndex !== 0 && index >= 0) || index < 0) {
      SetMenuIndex(index);
    } else if (menuIndex === 0 && index === 0) {
      SetMenuIndex(-1);
    }
  };

  useEffect(HandleScrollLock, [isScrollLocked]);
  console.log('menuIndex', menuIndex, isScrollLocked);
  document.ontouchmove = (e) => isScrollLocked && e.preventDefault();
  return (
    <PAGE
      isLocked={isScrollLocked}
      scrollPosition={scrollTop}
      ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <Header
        isMenuOpen={isScrollLocked}
        accentColor={accentColor}
        onMenuToggle={OnMenuToggle}
      />
      <main ref={mainEl} style={pageStyles}>
        {children}
      </main>
      <Overlay
        isActive={isScrollLocked}
      />
    </PAGE>
  )
}

export default Page;
