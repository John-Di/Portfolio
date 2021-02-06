import React, {
  useState
} from "react";
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

// markup
const Page = ({ accentColor, children }) => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const [scrollTop, saveScrollTop] = useState(-1);
  return (
    <PAGE    >
      <Header
        menuIndex={menuIndex}
        isMenuOpen={!!~menuIndex}
        setMenuIndex={setMenuIndex}
        accentColor={accentColor}
      />
      <main style={pageStyles}>
        {children}
      </main>
      <Overlay
        isActive={!!~menuIndex}
      />
    </PAGE>
  )
}

export default Page;
