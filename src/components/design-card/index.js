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
import AdaptedLinkImage from "../adapted-link-image";
import useCollapsible from "../../hooks/useCollapsible";
import { slideOverlay } from "../../hooks/useCollapsible/helpers";
import ChicCTA from "../chic-cta";

export default function DesignCard({
  image,
  title,
  handle,
  images
}) {
  const {
    state
  } = useContext(LocationContext);
  // console.log('DesignCard', image);

  const url = `/designs/${handle}`;
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
    } = useCollapsible({ adjust: slideOverlay.bind(this) }),
    designImage = {
      url,
      locationState,
      image,
      src: image && image.url ? image.url : image
    },
    onMouseEnter = expandList,
    onMouseLeave = collapseList;
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
        <AdaptedLinkImage {...designImage} handle={handle} />
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
