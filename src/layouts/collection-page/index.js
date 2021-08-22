import React, { useContext } from "react";
import ProductTile from "../../components/product-tile";
import ProductProvider from "../../providers/ProductProvider";
import Grid from "../grid";
import { device } from '../../utils/variables';
import {
  ARTICLE,
  BODY,
  FILTERS,
  PRODUCTS
} from './styles';
import Sort from "../../components/sort";
import CollectionContext from "../../contexts/CollectionContext";
import Filters from "../../components/filters";
import FiltersBar from "../../components/filters-bar";
import FiltersSideNav from "../../components/filters-side-nav";

const FiltersStyles = {
  bar: FiltersBar,
  aside: FiltersSideNav,
  test: Filters
}

// markup
const CollectionPage = ({ filtersStyle = 'aside' }) => {

  const {
    activeProducts = []
  } = useContext(CollectionContext);

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
      <br />
      <br />
      <br />
      <br />
      <BODY>
        {/* <Sort /> */}
        <FILTERS>
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
              breakpoint: device.laptop,
              gap: [2, 1],
              perRow: 2
            }, {
              breakpoint: device.laptopL,
              gap: [4, 1],
              perRow: 3
            }]} />
        </PRODUCTS>
      </BODY>
    </ARTICLE>
  )
}

export default CollectionPage;
