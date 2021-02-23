import React, {
  useState,
  useRef,
  useEffect
} from "react";
import BackToTop from '../../components/back-to-top';
import {
  PAGE
} from './styles';
import HandleScrollLock from '../../utils/ScrollLock';

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

const Page = ({ children, isScrollLocked = false, wasScrolled = false }) => {
  const [scrollTop, SaveScrollTop] = useState(0);

  // const pageEl = useRef(null);
  const mainEl = useRef(null);

  useEffect(HandleScrollLock.bind(this, mainEl, SaveScrollTop), [isScrollLocked]);
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
      <BackToTop isActive={wasScrolled} />
    </PAGE>
  )
}

export default Page;
