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
import StrawBerryImage from "../../images/designs/strawberry_200x.png";

const FiltersStyles = {
  bar: FiltersBar,
  aside: FiltersSideNav,
  test: Filters
}
const designImages = {
  "strawberry": {
    image: StrawBerryImage
  },
  "cookie": {
    image: randomImage()
  }
};

// markup
const DesignsPage = ({ filtersStyle = 'aside', designs }) => {

  console.log('DesignsPage');

  const DesignTileMap = ({ variants = [], ...design }, index) => {
    console.log("design", design, designImages[design.handle].image)

    return (
      <DesignCard {...design} />
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
        {/* <FILTERS>
          <FiltersComponent />
        </FILTERS> */}
        <PRODUCTS>
          <Grid
            items={designs}
            ItemMap={DesignTileMap}
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

export default DesignsPage;
