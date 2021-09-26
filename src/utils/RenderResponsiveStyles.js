import { conditionalProp } from "./AssessProps";

const RenderBreakpoint = ({ breakpoint, ...props }, render) => {
  return conditionalProp(breakpoint, `
    @media screen and ${breakpoint} {
      ${render(props)}
    }
  `, render(props))
};

const RenderResponsiveStyles = (render, { rules }) => rules.reduce((acc, rule) => `
  ${acc}
  ${RenderBreakpoint(rule, render)}
`, ``);

export default RenderResponsiveStyles;

