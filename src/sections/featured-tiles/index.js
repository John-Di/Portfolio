import React from "react";
import Section from '../../components/section';
import TileRow from "../../layouts/tile-row";
import { size } from '../../utils/variables';

export default function FeaturedTiles({ children }) {
  return (
    <Section maxWidth={size.laptopL} hasPadding={true} className="four-pair-section"
      heading={(<h1>Featured Tiles</h1>)}
    >
      <TileRow>
        {children}
      </TileRow>
    </Section>
  );

};
