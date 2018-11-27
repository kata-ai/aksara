---
id: foundation-spacing
title: Spacing
prev: foundation-layout
next: foundation-typography
---

<text-primary>

Space is a principle to unify the padding, margins, and heights within layout and components. It used consistently applied in margin and padding across components and UIs. Having a set spacing scale brings a rhythm to the product and creates a natural and familiar flow from page to page.

</text-primary>

## Spacing Scale

Use the Spacing Scale when building individual elements. It includes minute increments needed to create appropriate spatial relationships for detail-level designs. This scale is applied and used within all Kata DLS components.

| Code           | Name        | rem   | Pixels | Preview |
| -------------- | ----------- | ----- | ------ | ------- |
| `$spacing-2xs` | spacing-2xs | 0.125 | 2      | nanti   |
| `$spacing-xs`  | spacing-xs  | 0.25  | 4      | nanti   |
| `$spacing-s`   | spacing-s   | 0.5   | 8      | nanti   |
| `$spacing-sm`  | spacing-sm  | 0.75  | 12     | nanti   |
| `$spacing-m`   | spacing-m   | 1     | 16     | nanti   |
| `$spacing-l`   | spacing-l   | 1.5   | 24     | nanti   |
| `$spacing-xl`  | spacing-xl  | 2     | 32     | nanti   |
| `$spacing-2xl` | spacing-2xl | 2.5   | 40     | nanti   |
| `$spacing-3xl` | spacing-3xl | 4     | 64     | nanti   |
| `$spacing-4xl` | spacing-4xl | 5     | 80     | nanti   |

## Applying Spacing

The spacing scale can be applied to margin or padding properties. Likewise, these spacing sizes can be applied to both vertical and horizontal edges. The code takes the place of the values normally assigned to margin and padding. The following are all approved ways to syntactically apply Kata DLS spacing codes:

```
margin: $spacing-xs;
margin: $layout-sm $layout-2xs;
margin: $spacing-xl 0 $spacing-sm 0;
margin-right: $layout-l;
padding: $spacing-sm;
padding: $layout-l $layout-sm;
padding: $spacing-xl $spacing-sm 0 $spacing-sm;
padding-left: $spacing-auto;
```