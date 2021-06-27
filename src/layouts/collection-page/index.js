import React from "react";
import ProductTile from "../../components/product-tile";
import ProductProvider from "../../providers/ProductProvider";
import { randomImageArray } from "../../utils/randoms";
import Grid from "../grid";
import { device } from '../../utils/variables';
import {
  ARTICLE,
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
        <ProductTile />
      </ProductProvider>
    )
  };

  return (
    <ARTICLE>
    <PRODUCTS>
      <Grid
        items={products}
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
          perRow: 3
        }, {
          breakpoint: device.laptopL,
          gap: [4, 1],
          perRow: 4
        }]} />
    </PRODUCTS>
    </ARTICLE>
  )
}

export default CollectionPage;
