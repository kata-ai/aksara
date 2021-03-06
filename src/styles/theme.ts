import { colors, fonts, breakpoints, widths } from './variables';

const theme = {
  // Site colors
  colors,

  // Font stack
  fonts,

  // Media breakpoints (Important: use `min-width`!)
  breakpoints,

  // Widths
  widths,

  // Heights
  heights: {
    header: 64
  },

  // Container widths
  containerWidth: {
    md: 720,
    lg: 960,
    xl: 1140
  },

  // Used in stuff like `react-media-match`
  mediaQueries: {
    mobile: `(max-width: ${breakpoints.md - 1}px)`,
    tablet: {
      base: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.xl - 1}px)`,
      portrait: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
      landscape: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`
    },
    desktop: `(min-width: ${breakpoints.xl}px)`
  },

  // Dimensions
  dimensions: {
    fontSize: {
      small: 12,
      medium: 14,
      regular: 16,
      large: 18
    },
    headingSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25
    },
    lineHeight: {
      small: '16px',
      medium: '20px',
      regular: '24px',
      large: '22px',
      heading: '32px'
    },
    containerPadding: {
      mobile: '24px',
      tablet: '32px',
      desktop: '55px'
    }
  },

  // z-index
  zIndex: {
    content: 1,
    header: 90,
    overlay: 95,
    floatingButton: 100,
    drawer: 105,
    topbar: 110
  }
};

export default theme;
