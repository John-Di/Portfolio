import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
  conditionalProp
} from '../../utils/AssessProps';
import IdealTextColor from '../../utils/IdealTextColor';
import { preparePathsFilter } from 'graphql-compose/lib/utils/filterByDotPaths';

const HeaderTabletProps = ({ isActive, whiteOnHover, textColor, accentColor }) => `
  cursor: pointer;
  grid-template: "logo nav util" / 1fr 3fr 1fr;
  ${isActive ? HeaderTabletProps : null}

  ${conditionalProp(whiteOnHover, `
    &:hover,
    &focus {

      box-shadow: 0 3px 1px rgba(0,0,0,0.2);
      transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

      a {
        background-color: transparent;
        color: ${`#000000`};

        &:hover,
        &:focus {
          color: ${accentColor};
          font-weight: bold;
          text-decoration: underline;
        }

        &:active,
        &.active {
          color: ${accentColor};

          &,
          &:hover,
          &:focus {
            background-color: ${accentColor};
            color: ${IdealTextColor(textColor)};
          }
        }
      }
    }
  `)}
`;

const HeaderMobileProps = ({ isMenuOpen, textColor, accentColor }) => conditionalProp(isMenuOpen, `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  a {
    background-color: transparent;
    color: ${`#000000`};

    &:hover,
    &:focus {
      color: ${accentColor};
      font-weight: bold;
      text-decoration: underline;
    }

    &:active,
    &.active {
      color: ${accentColor};
    }

    &:active,
    &.active {
      &,
      &:hover,
      &:focus {
        background-color: ${accentColor};
        color: ${textColor};
      }
    }
  }
`);

const onStuck = ({ whiteOnHover, textColor, accentColor, isStuck = true }) => conditionalProp(isStuck, `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  @media screen and ${device.max_tablet} {
    a {
      background-color: transparent;
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${accentColor};
        font-weight: bold;
        text-decoration: underline;
      }

      &:active,
      &.active {
        color: ${accentColor};
      }

      ${conditionalProp(whiteOnHover, `
        &:active,
        &.active {
          &,
          &:hover,
          &:focus {
            background-color: ${accentColor};
            color: ${textColor};
          }
        }
      `)}
    }
  }

  @media screen and ${device.tablet} {
    a {
      background-color: transparent;
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${accentColor};
        font-weight: bold;
        text-decoration: underline;
      }

      &:active,
      &.active {
        background-color: ${textColor};
        color: ${accentColor};
      }

      &:active,
      &.active {
        &,
        &:hover,
        &:focus {
          background-color: ${accentColor};
          color: ${textColor};
        }
      }
    }
  }
`);

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
  padding: 0 4%;
  padding-top: 1px;
  z-index: 2;

  @media screen and ${device.tablet} {
    grid-template: "logo nav util" / 6em 1fr 6em;
  }

  ${onStuck}

  a,
  button {
    padding: 0.75em;
    width: 4em;
    height: 4em;

    &:hover,
    &:focus {
      color: ${props => props.accentColor};

      // @media screen and ${device.tablet} {
      //   background-color: ${props => IdealTextColor(props.accentColor)};
      // }
    }

    &:active,
    &.active {
      color: ${props => IdealTextColor(props.accentColor)};

      @media screen and ${device.tablet} {
        background-color: ${props => props.accentColor};
      }
    }
  }

  ${props => conditionalProp(props.quickCartTop, `
    ~ aside {
      top: ${(props.quickCartTop - 1) / 16}em;
    }
  `)}
`;