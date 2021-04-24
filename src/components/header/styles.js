import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
  conditionalProp
} from '../../utils/AssessProps';

const HeaderTabletProps = ({ whiteOnHover, textColor, accentColor }) => `
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

const onStuck = ({ whiteOnHover, textColor, accentColor, isStuck }) => conditionalProp(isStuck, `
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
  z-index: 1;
  top: -1px;
  padding-top: 1px;

  a {
    color: ${props => props.textColor};

    &:active,
    &.active {
      color: ${props => props.accentColor};

      @media screen and ${device.tablet} {
        background-color: ${props => props.textColor};
      }
    }
  }

  ${onStuck}

  @media screen and ${device.max_tablet} {
    ${HeaderMobileProps}
  }

  @media screen and ${device.tablet} {
    cursor: pointer;
    grid-template: "logo nav util" / 1fr 3fr 1fr;
    ${props => props.isActive ? HeaderTabletProps : null}

    ${props => conditionalProp(props.whiteOnHover, `
      &:hover,
      &focus {
        ${HeaderTabletProps}
      }
    `)}
  }
`;