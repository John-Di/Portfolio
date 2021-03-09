import { device } from '../utils/variables';

export const FlexCentered = `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveLine = `
  ${FlexCentered}

  @media screen and ${device.tablet} {
    flex-direction: row;
  }
`

export const HorizontalLine = `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

export const VerticalLine = `
  ${FlexCentered}
`

// export const FlexAlignment = option => `
//   ${mapAlignment(option)}
// `

// const mapAlignment = option => {

// }