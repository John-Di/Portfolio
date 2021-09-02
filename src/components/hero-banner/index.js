import React from "react";
import handleize from "../../utils/handleize";
import { randomImage } from "../../utils/randoms";
import AdaptedImage from "../adapted-image";
import {
  SECTION,
  BANNER,
  BANNERIMAGE,
  CONTENT
} from './styles';

export default function HeroBanner({
  background = randomImage(),
  h1 = 'Lorem ipsum',
  h2,
  h3,
  h4,
  h5,
  h6,
  children,
  placeholder
}) {
  return (
    <SECTION background={background}>
      <BANNER>
        <CONTENT>
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          {h4 && <h4>{h4}</h4>}
          {h5 && <h5>{h5}</h5>}
          {h6 && <h6>{h6}</h6>}
          {children}
        </CONTENT>
      </BANNER>
    </SECTION>
  );
}