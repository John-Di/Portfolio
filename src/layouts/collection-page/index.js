import React, { useContext } from "react";
import ProductTile from "../../components/product-tile";
import ProductProvider from "../../providers/ProductProvider";
import Grid from "../grid";
import { device } from '../../utils/variables';
import {
  ARTICLE,
  BODY,
  CLEARFIX,
  SORT,
  FILTERS,
  PRODUCTS
} from './styles';
import Sort from "../../components/sort";
import CollectionContext from "../../contexts/CollectionContext";
import Filters from "../../components/filters";
import FiltersBar from "../../components/filters-bar";
import FiltersSideNav from "../../components/filters-side-nav";
import HeroBanner from "../../components/hero-banner";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

const FiltersStyles = {
  bar: FiltersBar,
  aside: FiltersSideNav,
  test: Filters
}

// markup
const CollectionPage = ({ filtersStyle = 'aside', title, handle }) => {

  const {
    activeProducts = []
  } = useContext(CollectionContext), {
    ref,
    isOpen
  } = useContext(CartFlyoutContext);

  const ProductTileMap = ({ variants = [], ...product }, index) => {
    return (
      <ProductProvider
        key={index} product={{
          variants,
          ...product
        }}
        staticOptions={['Size']}
        hiddenOptions={['Size']}
      >
        <ProductTile />
      </ProductProvider>
    )
  };

  const FiltersComponent = FiltersStyles[filtersStyle];
  return (
    <ARTICLE>
      <HeroBanner placeholder={handle} h1={title} />
      <BODY>
        <CLEARFIX>
          <SORT>
            <Sort />
          </SORT>
          <FILTERS
            ref={ref}
            isOpen={isOpen}
          >
            <FiltersComponent />
          </FILTERS>
          <PRODUCTS>
            <Grid
              items={activeProducts}
              ItemMap={ProductTileMap}
              rules={[{
                perRow: 1,
                gap: [2, 0]
              }, {
                breakpoint: device.mobileXL,
                gap: [2, 1],
                perRow: 2
              }, {
                breakpoint: device.tablet,
                gap: [2, 1],
                perRow: 3
              }, {
                breakpoint: device.laptop,
                gap: [2, 2],
                perRow: 2
              }, {
                breakpoint: device.laptopL,
                gap: [4, 1],
                perRow: 3
              }]} />
          </PRODUCTS>
        </CLEARFIX>
      </BODY>
    </ARTICLE>
  )
}

export default CollectionPage;
