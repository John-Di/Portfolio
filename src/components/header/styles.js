import styled from 'styled-components';
import { device } from '../../utils/variables';
import { PropMap, conditionalProp } from '../../utils/AssessProps';

const HeaderTabletProps = ({ isActive, whiteOnHover, primaryColor, primaryContrast }) => `
  cursor: pointer;
  border: 0.25em solid transparent;
  padding: 0.75em;

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
              color: ${primaryContrast};
              fill: ${primaryContrast};
            }

            span::after {
              background: ${primaryContrast};
              color: ${primaryColor};
            }
          }
        }
      }
    }
  `)}
`;

const headerShadowHeight = 3;

const onStuck = ({
  whiteOnHover, quickCartTop, primaryColor, primaryContrast, isStuck = true
}) => `
  background-color: white;
  transition: background-color 0.25s 0.25s, box-shadow 0.25s 0.05s;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    box-shadow: 0 ${headerShadowHeight}px 1px rgba(0,0,0,0.2);
    height: ${headerShadowHeight}px;
    bottom: 0;
  }

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
            color: ${primaryContrast};
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
          color: ${primaryContrast};

          span::after {
            background: ${primaryContrast};
            color: ${primaryColor};
          }

          svg {
            color: ${primaryContrast};
            fill: ${primaryContrast};
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
    grid-template: "logo nav util" / 1fr 3fr 1fr;
    padding: 0 4%;
  }

  ${PropMap.bind(this, onStuck)}

  a,
  button {
    ${PropMap.bind(this, HeaderTabletProps)}
  }
`;