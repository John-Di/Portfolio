import React from "react";
import ProductTile from "../../components/product-tile";
import ProductProvider from "../../providers/ProductProvider";
import { randomImageArray } from "../../utils/randoms";
import Grid from "../grid";
import { device } from '../../utils/variables';
import {
  PRODUCTS
} from './styles';

// markup
const CollectionPage = ({ products = [] }) => {

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
        <ProductTile
          key={index}
          price={`$${parseFloat(variants[0].price).toFixed(2)}`}
        />
      </ProductProvider>
    )
  };

  return (
    <PRODUCTS>
      <Grid
        items={products}
        ItemMap={ProductTileMap}
        rules={[{
          perRow: 1
        }, {
          breakpoint: device.tablet,
          gap: [2, 1],
          perRow: 2
        }, {
          breakpoint: device.laptop,
          gap: [4, 1],
          perRow: 4
        }]} />
    </PRODUCTS>
  )
}

export default CollectionPage;
