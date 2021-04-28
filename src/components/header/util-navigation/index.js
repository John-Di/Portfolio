import React, {
  useContext
} from "react";
import ThemeContext from "../../../contexts/PageContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import AccountIcon from '../../../images/svgs/account.svg';
import CartIcon from '../../../images/svgs/cart.svg';
import {
  LINK,
  UTIL,
  ITEM,
  ITEMS,
  EXTERNAL
} from './styles';

const nav = [
  {
    href: "/resume/",
    label: () => "Resume"
  },
  {
    href: "/style-guide/",
    label: () => "Style Guide"
  },
  {
    href: "/products/color-cookie-hoodie",
    label: prod => prod ? prod.title : 'Color Cookie Hoodie'
  },
  {
    href: "/products/full-strawberry-tee",
    label: prod => prod ? prod.title : 'Full Strawberry Tee'
  }
];

const UtilNavigation = ({
  hasCart = false,
  hasAccount = false
}) => {

  const {
    store,
    checkoutURL
  } = useContext(ShopContext), {
    isMenuOpen,
    selectMenuItem,
    cartIsEmpty
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  console.log("UtilNavigation", checkoutURL);

  return (
    <UTIL>
      <ITEMS
        isMenuOpen={isMenuOpen}
        desktopNavAlignment={'flex-end'}>
        {hasAccount &&
          <ITEM>
            <LINK
              to={`/account/`}
              onClick={selectMenuItem.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              state={{
                wasRedirected: true,
                store,
                checkout: store.checkout,
                cartIsEmpty,
                label: 'account',
                color: accentColor
              }}
            >
              <AccountIcon />
            </LINK>
          </ITEM>
        }
        {checkoutURL &&
          <li>
            <EXTERNAL
              to={checkoutURL}
              onClick={selectMenuItem.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              cartIsEmpty
            >
              <CartIcon />
            </EXTERNAL>
          </li>
        }
      </ITEMS>
    </UTIL>
  )
}

export default UtilNavigation;