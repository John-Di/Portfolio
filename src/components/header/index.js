import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import MainNavigation from './main-navigation';
import UtilNavigation from './util-navigation';
import React, {
  useContext
} from "react";
import {
  HEADER,
} from './styles';
import PageContext from '../../contexts/PageContext';
import ThemeContext from '../../contexts/ThemeContext';

const Header = ({
  isActive = true,
  desktopNavAlignment
}) => {
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage || isActive;

  const {
    isStuck,
    isMenuOpen,
    headerRef
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  return (
    <HEADER
      isMenuOpen={isMenuOpen}
      textColor={textColor}
      accentColor={navAccent}
      textColorEmphasis={textColor}
      whiteOnHover={whiteOnHover}
      ref={headerRef}
      quickCartTop={headerRef.current ? headerRef.current.scrollHeight : 0}
      isStuck={isStuck}
      isActive={isActive}
    >
      <MainNavigation
        isActive={false}
        desktopNavAlignment={desktopNavAlignment}
      />
      <UtilNavigation
        hasCart={true}
        hasAccount={false} />
    </HEADER>
  )
}

export default React.memo(Header);