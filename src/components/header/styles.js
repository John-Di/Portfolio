import styled from 'styled-components';
import { device } from '../../utils/variables';
import { PropMap, conditionalProp } from '../../utils/AssessProps';

const HeaderTabletProps = ({ isActive, whiteOnHover, primaryColor, accentContrast }) => `
  cursor: pointer;
  grid-template: "logo nav util" / 1fr 3fr 1fr;

  ${conditionalProp(whiteOnHover, `
    &:hover,
    &focus {

      a {
        background-color: transparent;
        color: ${`#000000`};

        &:hover,
        &:focus {
          color: ${primaryColor};
          font-weight: bold;
          text-decoration: underline;

          svg {
            color: ${primaryColor};
            fill: ${primaryColor};
          }
        }

        &:active,
        &.active {
          background-color: ${primaryColor};
          color: ${primaryColor};

          &,
          &:hover,
          &:focus {
            svg {
              color: ${accentContrast};
              fill: ${accentContrast};
            }

            span::after {
              background: ${accentContrast};
              color: ${primaryColor};
            }
          }
        }
      }
    }
  `)}
`;


const onStuck = ({
  whiteOnHover, quickCartTop, primaryColor, accentContrast, isStuck = true
}) => `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  @media screen and ${device.max_tablet} {
    a {
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${primaryColor};
        font-weight: bold;
        text-decoration: underline;
      }

      &:active,
      &.active {
        color: ${primaryColor};
      }

      ${conditionalProp(whiteOnHover, `
        &:active,
        &.active {
          &,
          &:hover,
          &:focus {
            background-color: ${primaryColor};
            color: ${accentContrast};
          }
        }
      `)}
    }
  }

  @media screen and ${device.tablet} {
    ${conditionalProp(quickCartTop, `
      ~ aside {
        top: ${(quickCartTop - 1) / 16}em;
      }
    `)}

    a {
      background-color: transparent;
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${primaryColor};
        font-weight: bold;
        text-decoration: underline;

        svg {
          color: ${primaryColor};
          fill: ${primaryColor};
        }
      }

      &:active,
      &.active {
        color: ${primaryColor};

        &,
        &:hover,
        &:focus {
          background-color: ${primaryColor};
          color: ${accentContrast};

          span::after {
            background: ${accentContrast};
            color: ${primaryColor};
          }

          svg {
            color: ${accentContrast};
            fill: ${accentContrast};
          }
        }
      }
    }
  }
`;

export const HEADER = styled.header`
  max-width: 100vw;
  width: 100%;
  display: grid;
  grid-template: "nav logo util" / 6em 1fr 6em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  top: -1px;
  padding-top: 1px;
  z-index: 2;

  @media screen and ${device.tablet} {
    grid-template: "logo nav util" / 6em 1fr 6em;
    padding: 0 4%;
  }

  ${PropMap.bind(this, onStuck)}

  a,
  button {
    padding: 0.75em;
    ${PropMap.bind(this, HeaderTabletProps)}
  }
`;