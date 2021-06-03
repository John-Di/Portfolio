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

  const ProductTileMap = ({ title, handle, variants = [], images, ...product }, index) => {
    console.log('ProductTileMap', index, { title, handle, variants, images, ...product })
    return (
      <ProductProvider
        key={index} product={{ title, handle, variants, images: randomImageArray(5), ...product }}>
        <ProductTile
          key={index}
          url={`/products/${handle}`}
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
          gap: [1, 1],
          perRow: 2
        }, {
          breakpoint: device.laptop,
          gap: [2, 2],
          perRow: 4
        }]}
        gutterOffset={[{
          row: 2,
          col: 2
        }]} />
    </PRODUCTS>
  )
}

export default CollectionPage;
