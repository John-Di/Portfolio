import React from "react";
import { randomImage } from "../../utils/randoms";
import {
  SECTION,
  BANNER
} from './styles';

export default function HeroBanner({
  h1 = 'Lorem ipsum',
  h2,
  h3,
  h4,
  h5,
  h6,
  children
}) {
  const background = randomImage();

  return (
    <SECTION background={background}>
      <BANNER>
        {h1 && <h1>{h1}</h1>}
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
        {h4 && <h4>{h4}</h4>}
        {h5 && <h5>{h5}</h5>}
        {h6 && <h6>{h6}</h6>}
        {children}
      </BANNER>
    </SECTION>
  );
}