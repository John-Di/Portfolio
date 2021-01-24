import MegaMenu from '../mega-menu';
import ContentBlock from '../content-block';
import Section from '../section';
import ResponsivePair from '../../layouts/responsive-pair';
import {
  jsxCloneArray,
  reduceJSXList,
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomIntegerIn
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import {
  navigate
} from "gatsby"
import React, {
  useState
} from "react";
import {
  HEADER,
  NAV,
  UL,
  LI,
  NavLink
} from './styles';

const onClick = (event, handle, replace = true) => {
  event.preventDefault();

  navigate(
    handle,
    { replace }
  )
}

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

const Header = () => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const updateMenuIndex = index => setMenuIndex(index === menuIndex ? -1 : index);

  let accent = randomColor();

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
    >
      <NAV>
        <UL
          desktopNavAlignment={alignment[randomIntegerEx(0, alignment.length)]}
        >
          {
            arrayToJSXList(nav, (item, i) => (
              <LI>
                <NavLink
                  to={item.href}
                  onClick={() => updateMenuIndex(i)}
                  accent={accent}
                  emphasis={IdealTextColor(accent)}
                >
                  {item.label}
                </NavLink>
              </LI>
            ))
          }
        </UL>
        {megaMenu}
      </NAV>
    </HEADER>
  )
}

export default Header;