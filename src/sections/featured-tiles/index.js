import React from "react";
import Section from '../../components/section';
import TileGrid from "../../layouts/tile-grid";
import TileRow from "../../layouts/tile-row";
import ProductTile from '../../components/product-tile';
import { size } from '../../utils/variables';
import { arrayToComponentSiblings } from "../../utils/dom-builder";

export default function FeaturedTiles({ heading = `Featured Tiles`, children, items = [], accentColor }) {

  if (items.length) {
    return (
      <Section maxWidth={items.length > 2 ? `100%` : `${size.laptopL}px`} hasPadding={true} className="featured-tiles-section"
        heading={(<h1>{heading}</h1>)}
      >
        <TileRow>
          {items.map((product, index) => {
            return (
              <ProductTile
                key={index}
                heading={product.title}
                price={`$${parseFloat(product.variants[0].priceV2.amount).toFixed(2)}`}
                accentColor={accentColor}
                image={product.images[0].localFile.childImageSharp.fixed}
              />
            )
          })}
        </TileRow>
      </Section>
    );
  } else {
    return (
      <Section maxWidth={children.length > 2 ? `100%` : `${size.laptopL}px`} hasPadding={true} className="featured-tiles-section"
        heading={(<h1>{heading}</h1>)}
      >
        <TileRow>
          {children}
        </TileRow>
      </Section>
    );
  }
};
