import { breakpoints } from 'styles/variables';

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.md - 1}px)`,
  tablet: {
    base: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.xl - 1}px)`,
    portrait: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
    landscape: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`
  },
  desktop: `(min-width: ${breakpoints.xl}px)`
};
