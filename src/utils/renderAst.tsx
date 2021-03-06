import React from 'react';
import rehypeReact from 'rehype-react';

import * as MarkdownComponents from 'components/docs/MarkdownComponents';
import MarkdownRow from 'components/docs/MarkdownRow';
import Col from 'components/layout/Col';
import ColorSwatchGrid from 'components/foundations/ColorSwatchGrid';
import ColorSwatch from 'components/foundations/ColorSwatch';
import FontStack from 'components/foundations/FontStack';
import TypographyTable from 'components/foundations/TypographyTable';
import SpacingDemo from 'components/foundations/SpacingDemo';
import Gradient01 from 'components/foundations/gradients/Gradient01';
import Gradient02 from 'components/foundations/gradients/Gradient02';
import Gradient03 from 'components/foundations/gradients/Gradient03';
import Gradient04 from 'components/foundations/gradients/Gradient04';
import Gradient05 from 'components/foundations/gradients/Gradient05';
import Gradient06 from 'components/foundations/gradients/Gradient06';
import Gradient07 from 'components/foundations/gradients/Gradient07';
import Gradient08 from 'components/foundations/gradients/Gradient08';
import Gradient09 from 'components/foundations/gradients/Gradient09';
import GuidelineTable from 'components/guidelines/GuidelineTable';
import {
  GuidelineTableList,
  GuidelineTableListItem
} from 'components/guidelines/GuidelineTableList';

const renderAst = (isDocs?: boolean) =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      h1: (props: any) => <MarkdownComponents.H1 {...props} />,
      h2: (props: any) => <MarkdownComponents.H2 {...props} />,
      h3: (props: any) => <MarkdownComponents.H3 {...props} />,
      h4: (props: any) => <MarkdownComponents.H4 {...props} />,
      h5: (props: any) => <MarkdownComponents.H5 {...props} />,
      h6: (props: any) => <MarkdownComponents.H5 as="h6" {...props} />,
      p: (props: any) => <MarkdownComponents.P isDocs={isDocs} {...props} />,
      ul: (props: any) => <MarkdownComponents.UnorderedList isDocs={isDocs} {...props} />,
      ol: (props: any) => <MarkdownComponents.OrderedList isDocs={isDocs} {...props} />,
      li: (props: any) => <MarkdownComponents.ListItem {...props} />,
      table: (props: any) => <MarkdownComponents.Table {...props} />,
      'text-primary': MarkdownComponents.TextPrimary,
      'md-row': MarkdownRow,
      'md-col': Col,
      'md-responsive-table': MarkdownComponents.ResponsiveTableWrapper,
      'gradient-g01': Gradient01,
      'gradient-g02': Gradient02,
      'gradient-g03': Gradient03,
      'gradient-g04': Gradient04,
      'gradient-g05': Gradient05,
      'gradient-g06': Gradient06,
      'gradient-g07': Gradient07,
      'gradient-g08': Gradient08,
      'gradient-g09': Gradient09,
      'guideline-table': GuidelineTable,
      'guideline-ul': GuidelineTableList,
      'guideline-li': GuidelineTableListItem,
      'foundation-color-swatch-grid': ColorSwatchGrid,
      'foundation-color-swatch': ColorSwatch,
      'foundation-font-stack': FontStack,
      'foundation-typography-table': TypographyTable,
      'foundation-spacing-demo': SpacingDemo
    }
  }).Compiler;

export default renderAst;
