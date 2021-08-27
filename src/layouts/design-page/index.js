import React, { useContext } from "react";
import Grid from "../grid";
import { device } from '../../utils/variables';
import {
  ARTICLE,
  BODY,
  FILTERS,
  PRODUCTS
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import Filters from "../../components/filters";
import FiltersBar from "../../components/filters-bar";
import FiltersSideNav from "../../components/filters-side-nav";
import { randomImage } from "../../utils/randoms";
import DesignCard from "../../components/design-card";
import ProductProvider from "../../providers/ProductProvider";

const FiltersStyles = {
  bar: FiltersBar,
  aside: FiltersSideNav,
  test: Filters
}

// markup
const DesignPage = ({ filtersStyle = 'aside', products, ...design }) => {

  console.log('DesignsPage');

  const {
    activeProducts = []
  } = useContext(CollectionContext);

  const designs = [
    {
      image: randomImage(),
      title: "Cookie",
      products: activeProducts.filter(({ title }) => !!~title.indexOf('Cookie'))
    },
    {
      image: randomImage(),
      title: "Strawberry",
      products: activeProducts.filter(({ title }) => !!~title.indexOf('Strawberry'))
    }
  ];

  console.log('designs', designs);
  console.log('designs.products', designs[0].products);
  console.log('activeProducts', activeProducts);

  const ProductTileMap = ({ variants = [], ...design }, index) => {
    console.log("design", design)

    return (
      <DesignCard {...design} image={design.images[0]} />
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
            items={designs.map(({ products }) => products).flat()}
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

export default DesignPage;