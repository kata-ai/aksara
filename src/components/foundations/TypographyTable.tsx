import React from 'react';
import styled, { css } from 'utils/styled';
import { Table, ResponsiveTableWrapper, P, H1, H2, H3, H4, H5 } from '../docs/MarkdownComponents';
import { fontSizes, lineHeights, colors } from 'styles/variables';

const removeMargins = css`
  margin: 0;
`;

const TypographyTable: React.FC = () => (
  <ResponsiveTableWrapper>
    <Table>
      <thead>
        <tr>
          <th>Element</th>
          <th style={{ width: '33.33%' }}>Basic Properties</th>
          <th style={{ width: '33.33%' }}>Best Used For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Heading1>Heading1</Heading1>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 28px / 1.75rem;
              <br />
              <strong>font-weight:</strong> 500;
              <br />
              <strong>letter-spacing:</strong> -0.01em;
              <br />
              <strong>color:</strong> neutral09 / #2B2F33;
            </Pre>
          </td>
          <td>
            <P>For oversized screen titles. Use to explain what kind of screen you are on.</P>
          </td>
        </tr>
        <tr>
          <td>
            <Heading2>Heading2</Heading2>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 24px / 1.5rem;
              <br />
              <strong>font-weight:</strong> 500;
              <br />
              <strong>letter-spacing:</strong> -0.01em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>Main Titles. Use to explain what feature you are on.</P>
          </td>
        </tr>
        <tr>
          <td>
            <Heading3>Heading3</Heading3>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 20px / 1.25rem;
              <br />
              <strong>font-weight:</strong> 500;
              <br />
              <strong>letter-spacing:</strong> -0.01em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>
              Headings that identify key functionality. Use to explain activity state (eg: drawer,
              popup)
            </P>
          </td>
        </tr>
        <tr>
          <td>
            <Heading4>Heading4</Heading4>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 18px / 1.125rem;
              <br />
              <strong>font-weight:</strong> 500;
              <br />
              <strong>letter-spacing:</strong> -0.01em;
              <br />
              <strong>color:</strong> neutral09 / #2B2F33;
            </Pre>
          </td>
          <td>
            <P>Low Level Heading. Use for Card title.</P>
          </td>
        </tr>
        <tr>
          <td>
            <Heading5>Heading5</Heading5>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 16px / 1rem;
              <br />
              <strong>font-weight:</strong> 500;
              <br />
              <strong>letter-spacing:</strong> 0em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>
              - Empty state title
              <br />- Field Group heading.
            </P>
          </td>
        </tr>
        <tr>
          <td>
            <Label>Heading Label</Label>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 14px / 0.875rem;
              <br />
              <strong>font-weight:</strong> 700;
              <br />
              <strong>letter-spacing:</strong> -0.01em;
              <br />
              <strong>color:</strong> neutral06 / #949A9D;
              <br />
              <strong>text-transform:</strong> uppercase;
            </Pre>
          </td>
          <td>
            <P>Table Heading</P>
          </td>
        </tr>
        <tr>
          <td>
            <TextXLarge>Body - xLarge</TextXLarge>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 24px / 1.5rem;
              <br />
              <strong>font-weight:</strong> 300;
              <br />
              <strong>letter-spacing:</strong> 0em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>Short Description beneath title</P>
          </td>
        </tr>
        <tr>
          <td>
            <TextLarge>Body - Large</TextLarge>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 24px / 1.5rem;
              <br />
              <strong>font-weight:</strong> 300;
              <br />
              <strong>letter-spacing:</strong> 0em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>Anything from a couple of words to long description fields.</P>
          </td>
        </tr>
        <tr>
          <td>
            <TextMedium>Body - Medium</TextMedium>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 14px / 0.875rem;
              <br />
              <strong>font-weight:</strong> 300;
              <br />
              <strong>letter-spacing:</strong> 0em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>Anything from a couple of words to long description fields.</P>
          </td>
        </tr>
        <tr>
          <td>
            <TextSmall>Body - Small</TextSmall>
          </td>
          <td>
            <Pre style={{ margin: 0 }}>
              <strong>font-size:</strong> 12px / 0.75rem;
              <br />
              <strong>font-weight:</strong> 300;
              <br />
              <strong>letter-spacing:</strong> 0em;
              <br />
              <strong>color:</strong> neutral08 / #484C4F;
            </Pre>
          </td>
          <td>
            <P>Used for help text and secondary content.</P>
          </td>
        </tr>
      </tbody>
    </Table>
  </ResponsiveTableWrapper>
);

const Heading1 = styled(H1)`
  ${removeMargins}
`;

const Heading2 = styled(H2)`
  ${removeMargins}
`;

const Heading3 = styled(H3)`
  ${removeMargins}
`;

const Heading4 = styled(H4)`
  ${removeMargins}
`;

const Heading5 = styled(H5)`
  ${removeMargins}
`;

const Label = styled('span')`
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 700;
  color: ${colors.neutral06};
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const Pre = styled('pre')`
  white-space: pre !important;
`;

const TextXLarge = styled('span')`
  font-size: ${fontSizes.tera};
  line-height: ${lineHeights.tera};
  font-weight: 300;
  color: ${colors.neutral08};
`;

const TextLarge = styled('span')`
  font-size: ${fontSizes.giga};
  line-height: ${lineHeights.giga};
  font-weight: 300;
  color: ${colors.neutral08};
`;

const TextMedium = styled('span')`
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 300;
  color: ${colors.neutral08};
`;

const TextSmall = styled('span')`
  font-size: ${fontSizes.deka};
  line-height: ${lineHeights.deka};
  font-weight: 300;
  letter-spacing: 0;
  color: ${colors.neutral08};
`;

export default TypographyTable;
