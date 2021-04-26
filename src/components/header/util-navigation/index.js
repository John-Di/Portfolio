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
  ITEMS
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
        {hasCart &&
          <li>
            <LINK
              to={checkoutURL}
              onClick={selectMenuItem.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              state={{
                wasRedirected: true,
                store,
                checkout: store.checkout,
                cartIsEmpty,
                label: 'cart',
                color: accentColor
              }}
            >
              <CartIcon />
            </LINK>
          </li>
        }
      </ITEMS>
    </UTIL>
  )
}

export default UtilNavigation;