import MegaMenu from '../mega-menu';
import ContentBlock from '../content-block';
import Section from '../section';
import ResponsivePair from '../../layouts/responsive-pair';
import {
  jsxCloneArray,
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import React, {
  useState
} from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  HEADER,
  NAV,
  UL,
  LI,
  NavLink,
  Icon,
  DIV,
  Toggle
} from './styles';

const nav = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];
let alignment = [
  'flex-start',
  'center',
  'flex-end'
]

const Header = ({ textColor, backgroundColor }) => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const updateMenuIndex = index => setMenuIndex(index === menuIndex ? -1 : index);

  let accentColor = randomColor();
  let textOnAccentColor = IdealTextColor(accentColor);
  let whiteOnHover = textOnAccentColor === "#ffffff";

  const megaMenu = !!~menuIndex &&
    <MegaMenu>
      <Section maxWidth={`100%`} hasPadding={true} hasMarginLarge={false} className="some-mega-menu">
        <ResponsivePair
          items={
            jsxCloneArray(2, (l, _, i) => (
              <ResponsivePair
                items={
                  jsxCloneArray(4, (m, _, j) => {
                    let backgroundColor = randomColor();
                    let index = m * i + j;

                    return (
                      <ContentBlock
                        backgroundColor={backgroundColor}
                        backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
                        isEven={index % 2 === 0}
                        isSquare={true}
                        overlay={true}

                      >
                      </ContentBlock>
                    )
                  })
                }
              />
            ))
          }
        />
      </Section >
    </MegaMenu>;
  return (
    <HEADER
      isMenuOpen={!!~menuIndex}
      accentColor={accentColor}
      backgroundColor={backgroundColor}
      whiteOnHover={whiteOnHover}
    >
      <NAV>
        <Toggle textColor={backgroundColor} onClick={() => updateMenuIndex(0)}>
          <Icon icon={faBars} color={IdealTextColor(accentColor)} />
        </Toggle>
        <DIV
          isMenuOpen={!!~menuIndex}>
          <UL
            isMenuOpen={!!~menuIndex}
            desktopNavAlignment={alignment[randomIntegerEx(0, alignment.length)]}
          >
            {
              arrayToJSXList(nav, (item, i) => (
                <LI>
                  <NavLink
                    to={item.href}
                    onClick={() => updateMenuIndex(i + 1)}
                    textColor={textColor}
                    accentColor={accentColor}
                    textColorEmphasis={IdealTextColor(accentColor)}
                    activeClassName="active"
                    replace
                  >
                    {item.label}
                  </NavLink>
                </LI>
              ))
            }
          </UL>
          {/* {megaMenu} */}
        </DIV>
      </NAV>
    </HEADER>
  )
}

export default Header;