import React, {
  useState,
  useRef,
  useEffect
} from "react";
import {
  PAGE
} from './styles';

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

const Page = ({ children, isScrollLocked = false }) => {
  const [scrollTop, SaveScrollTop] = useState(0);

  // const pageEl = useRef(null);
  const mainEl = useRef(null);

  const Lock = () => {
    // console.log('Lock', document.documentElement.scrollTop, window.pageYOffset);
    mainEl.current.style.top = -scrollTop + 'px';
    document.documentElement.classList.add('scroll-lock');
    document.body.classList.add('scroll-lock');
    document.ontouchmove = (e) => isScrollLocked && e.preventDefault();
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


  useEffect(HandleScrollLock, [isScrollLocked]);
  // console.log('menuIndex', menuIndex, isScrollLocked);
  return (
    <PAGE
      isLocked={isScrollLocked}
      scrollPosition={scrollTop}
    // ontouchstart={e => isScrollLocked && e.preventDefault()}
    >
      <main ref={mainEl} style={pageStyles}>
        {children}
      </main>
    </PAGE>
  )
}

export default Page;
