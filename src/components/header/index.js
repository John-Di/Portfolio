import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../../utils/randoms';
import BasicContrast from '../../utils/BasicContrast';
import MainNavigation from './main-navigation';
import UtilNavigation from './util-navigation';
import React, {
  useContext
} from "react";
import {
  HEADER,
} from './styles';
import PageContext from '../../contexts/PageContext';
import SiteThemeContext from '../../contexts/SiteThemeContext';

const Header = ({
  isActive = true,
  desktopNavAlignment
}) => {
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;
  let whiteOnHover = !!heroImage || isActive;

  const {
    headerRef
  } = useContext(PageContext);

  return (
    <HEADER
      whiteOnHover={whiteOnHover}
      ref={headerRef}
      quickCartTop={headerRef.current && false ? headerRef.current.scrollHeight : 0}
    >
      <MainNavigation
        desktopNavAlignment={desktopNavAlignment}
      />
      <UtilNavigation
        hasCart={true}
        hasAccount={false} />
    </HEADER>
  )
}

export default React.memo(Header);