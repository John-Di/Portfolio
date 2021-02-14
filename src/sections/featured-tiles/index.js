import React from "react";
import Section from '../../components/section';
import TileRow from "../../layouts/tile-row";
import { size } from '../../utils/variables';

export default function FeaturedTiles({ children }) {
  return (
    <Section maxWidth={children.length > 2 ? `100%` : `${size.laptopL}px`} hasPadding={true} className="featured-tiles-section"
      heading={(<h1>Featured Tiles</h1>)}
    >
      <TileRow>
        {children}
      </TileRow>
    </Section>
  );
};
