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
      }
    ],
    stacked: [
      {
        bp: `${device.laptop}`,
        alternates: true
      }
    ]
  },
  pageWidth: {
    adjacent: [
      {
        bp: `${device.mobileXL} and ${device.max_laptop}`,
        alternates: true
      }
    ],
    stacked: [
      {
        bp: `${device.laptop}`,
        alternates: true
      }
    ]
  }
}


export default function FourPairSection(isFullWidth, maxWidth = size.laptopL, hasPadding) {
  isFullWidth = isFullWidth.hasOwnProperty('isFullWidth') ? isFullWidth.isFullWidth : isFullWidth;
  hasPadding = !isFullWidth;
  return (
    <Section maxWidth={isFullWidth ? `100%` : maxWidth} hasPadding={hasPadding} className="four-pair-section"
      heading={(<h1>Four Pair Section</h1>)}
      subheading={(<h2>({isFullWidth ? `Four Full Width` : `Four Page Width`})</h2>)}>
      <ResponsivePair
        adjacentBreakpoints={
          [{
            bp: `${device.laptopL}`
          }]}
        items={
          jsxCloneArray(2, (l, _, i) => (
            <ResponsivePair
              adjacentBreakpoints={[{
                bp: `${device.laptop}`
              }]}
              items={
                jsxCloneArray(2, (m, _, j) => {
                  let backgroundColor = randomColor();
                  let index = m * i + j;
                  let length = l * m;

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
              }
            />
          ))
        }
      />
    </Section >
  );

};
