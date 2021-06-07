import React, { useContext } from "react";
import LocationContext from "../../contexts/LocationContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import { breadcrumbs } from "../../utils/variables";

import {
  NAV,
  UL,
  LI,
  LINK,
  SPAN
} from './styles';

export default function Breadcrumbs() {
  const {
    location,
    state
  } = useContext(LocationContext), {
    pathname,
    origin
  } = state;

  console.log('BreakCrumbs', location, state)


  const path = pathname.replace(origin, ''),
    crumbs = path.split('/').filter(str => !!str);
  console.log('BreakCrumbs.path', path, crumbs)


  return (
    <NAV>
      <UL>
        {
          arrayToComponentSiblings(crumbs, (c, i) => {
            console.log('BreakCrumbs.path',
              breadcrumbs.hasOwnProperty(c) ? breadcrumbs[c](c) : `/${c}`)

            return i === crumbs.length - 1 ? (
              <LI key={i}>
                <SPAN>{c}</SPAN>
              </LI>
            ) : (
              <LI key={i}>
                <LINK to={breadcrumbs.hasOwnProperty(c) ? breadcrumbs[c](c) : `/${c}`}>{c}</LINK>
              </LI>
            )
          })
        }
      </UL>

    </NAV>
  );
}
