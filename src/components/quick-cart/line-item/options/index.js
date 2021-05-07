import React, { useContext } from "react";
import {
  SwatchType
} from '../../../../components/swatch-grid/helpers';
import {
  arrayToComponentSiblings
} from '../../../../utils/dom-builder';

const Options = ({ options }) => {
  return (
    <dl>
      {
        arrayToComponentSiblings(options, ({ name, value }, i) => {
          let Swatch = SwatchType(name);
          return (
            <React.Fragment key={i}>
              <dt>{name}</dt>

              <Swatch
                id={`swatch-${value.replace('#', '')}-${Date.now()}`}
                value={value}
                key={i}
              />
            </React.Fragment>
          )
        })
      }
    </dl>
  );
}
export default Options;