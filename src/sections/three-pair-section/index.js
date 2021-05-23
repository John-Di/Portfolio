import React from "react";
import Section from '../../components/section';
import TextMediaBlock from '../../components/text-media-block';
import ChicCTA from '../../components/chic-cta';
import ResponsivePair from '../../layouts/responsive-pair';
import { jsxCloneArray } from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx
} from '../../utils/randoms';
import BasicContrast from '../../utils/BasicContrast';
import { size, device } from '../../utils/variables';

const breakpoints = {
  fullWidth: {
    adjacent: [
      {
        bp: `${device.mobileXL} and ${device.max_laptop}`,
        alternates: true
      },
      {
        bp: `${device.desktop}`,
        alternates: false
      }
    ],
    stacked: [
      {
        bp: `${device.laptop} and ${device.max_desktop}`,
        alternates: true
      }
    ]
  },
  pageWidth: {
    adjacent: [
      {
        bp: `${device.mobileXL} and ${device.max_laptop}`,
        alternates: true
      },
      {
        bp: `${device.desktop}`,
        alternates: false
      }
    ],
    stacked: [
      {
        bp: `${device.laptop} and ${device.max_desktop}`,
        alternates: true
      }
    ]
  }
}

export default function ThreePairSection(isFullWidth, maxWidth = size.laptopL, hasPadding) {
  isFullWidth = isFullWidth.hasOwnProperty('isFullWidth') ? isFullWidth.isFullWidth : isFullWidth;
  hasPadding = !isFullWidth;
  return (
    <Section maxWidth={isFullWidth ? `100%` : maxWidth} hasPadding={hasPadding} className="three-pair-section"
      heading={(<h1>Three Pair Section</h1>)}
      subheading={(<h2>({isFullWidth ? `Three Full Width` : `Three Page Width`})</h2>)}>
      <ResponsivePair
        adjacentBreakpoints={
          [{
            bp: `${device.laptop}`
          }]}
        items={
          jsxCloneArray(3, (length, _, index) => {
            let backgroundColor = randomColor();
            return (
              <TextMediaBlock
                backgroundColor={backgroundColor}
                backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
                adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
                stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
                isEven={index % 2 === 0}
              >
                <h2>Text Media Block {index + 1}/{length}</h2>
                <p>Just for the time being...</p>
                <ChicCTA
                  backgroundColor={backgroundColor}
                  textColor={BasicContrast(backgroundColor)}
                >Learn More</ChicCTA>
              </TextMediaBlock>
            )
          })
        } />
    </Section >
  );

};
