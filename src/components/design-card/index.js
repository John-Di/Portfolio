import React, { useContext } from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  CARD,
  TITLE,
  IMAGE,
  CONTENT,
  FADEINOVERLAY,
  WHIPEINOVERLAY,
  CTA,
  VIEWMORE
} from './styles';
import LocationContext from "../../contexts/LocationContext";
import AdaptedImage from "../adapted-image";
import useCollapsible from "../../hooks/useCollapsible";
import { slideOverlay } from "../../hooks/useCollapsible/helpers";
import ChicCTA from "../chic-cta";

export default function DesignCard({
  image,
  title,
  products,
  url = "#",
  images
}) {
  const {
    state
  } = useContext(LocationContext);
  // console.log('DesignCard', image);


  // const values = options.filter(({ name }) => name.toLowerCase() === 'color').map(({ values }) => values).flat();
  const locationState = {
    ...state,
    product: { title }
    // selectedVariantIndex
  };

  const
    {
      collapsibleRef,
      expandList,
      collapseList,
      isExpanded
    } = useCollapsible({ adjust: slideOverlay }),
    designImage = {
      url,
      locationState,
      image,
      src: image.url
    },
    onMouseEnter = e => { console.log('onMouseEnter'); expandList() },
    onMouseLeave = e => { console.log('onMouseLeave'); collapseList() };
  return (
    <CARD
      className="design-card"
      heading={title}
      state={locationState}
      onMouseEnter={onMouseEnter.bind(this)}
      onMouseLeave={onMouseLeave.bind(this)}
      isExpanded={isExpanded}
    >
      <IMAGE
        isExpanded={isExpanded}>
        <AdaptedImage {...designImage} />
      </IMAGE>
      <FADEINOVERLAY
        isExpanded={isExpanded}
        onClick={collapseList.bind(this)} />
      <WHIPEINOVERLAY
        ref={collapsibleRef}
        isExpanded={isExpanded}
      >

        <CONTENT
          isExpanded={isExpanded}
        >
          <TITLE
            to={url}
          >{title}</TITLE>
          <VIEWMORE
            to={url}
          >
            View More
          </VIEWMORE>
        </CONTENT>
      </WHIPEINOVERLAY>
    </CARD >
  );
}
