export const responsiveBreakpoints = (breakpoints, rules, base = false) => breakpoints.reduce((acc, bp, i) => `
  ${acc}

  @media screen and ${bp} {
    ${rules}
  }
`, base ? rules : ``);