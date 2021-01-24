import React from "react";
import Section from '../section';

export default function MegaMenu({ children }) {

  return (
    <Section className="megamenu" hasMarginSmall={false} hasMarginLarge={false} style={{ position: 'absolute', width: '100%', top: '0', left: '0', zIndex: '1' }}>
      {children}
    </Section>
  )
}
