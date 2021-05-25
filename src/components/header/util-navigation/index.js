import React, {
  useContext
} from "react";
import SiteThemeContext from "../../../contexts/SiteThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import LocationContext from "../../../contexts/LocationContext";
import CartLink from '../cart-link';
import {
  UTIL,
  ITEM,
  ITEMS
} from './styles';
import AccountLink from "../account-link";

const UtilNavigation = ({
  hasAccount = false
}) => {

  const {
    store,
    checkoutURL,
    cartCount
  } = useContext(ShopContext), {
    isMenuOpen
  } = useContext(PageContext), {
    accentColor
  } = useContext(SiteThemeContext), {
    showCart
  } = useContext(LocationContext);

  return (
    <UTIL>
      <ITEMS
        isMenuOpen={isMenuOpen}
        desktopNavAlignment={'flex-end'}>
        {hasAccount &&
          <ITEM>
            <AccountLink />
          </ITEM>
        }
        {showCart &&
          <li>
            <CartLink />
          </li>
        }
      </ITEMS>
    </UTIL>
  )
}

export default UtilNavigation;