---
name: "Design Overview"
description: "Design tokens extracted from https://oracleapex.com/ords/r/apex_pm/ut/design-overview"
colors:
  primary: "#5FB9B5"
  secondary: "#B3311F"
  surface: "#FFFFFF"
  on-surface: "#161513"
typography:
  text-1:
    fontFamily: "-apple-system"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1
  text-2:
    fontFamily: "-apple-system"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 2
  text-3:
    fontFamily: "-apple-system"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
  text-4:
    fontFamily: "apex-core-font"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
  text-5:
    fontFamily: "-apple-system"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.5
  text-6:
    fontFamily: "-apple-system"
    fontSize: "24.5px"
    fontWeight: 400
    lineHeight: 1.5
  text-7:
    fontFamily: "-apple-system"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.5
  text-8:
    fontFamily: "-apple-system"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.5
  text-9:
    fontFamily: "apex-core-font"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1
  text-10:
    fontFamily: "-apple-system"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.33
  text-11:
    fontFamily: "-apple-system"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.2
  text-12:
    fontFamily: "-apple-system"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.5
  text-13:
    fontFamily: "-apple-system"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.5
  text-14:
    fontFamily: "-apple-system"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.33
  text-15:
    fontFamily: "fcicons"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1
  text-16:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 400
  text-17:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  text-18:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.25
  text-19:
    fontFamily: "apex-core-font"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
  text-20:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  text-21:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.43
  text-22:
    fontFamily: "-apple-system"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.14
  text-23:
    fontFamily: "-apple-system"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.23
  text-24:
    fontFamily: "-apple-system"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.33
  text-25:
    fontFamily: "-apple-system"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.33
  text-26:
    fontFamily: "SFMono-Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  text-27:
    fontFamily: "-apple-system"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.33
  text-28:
    fontFamily: "-apple-system"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.27
  text-29:
    fontFamily: "-apple-system"
    fontSize: "0px"
    fontWeight: 400
spacing:
  base: "8px"
  xs: "1px"
  sm: "2px"
  md: "3px"
  lg: "4px"
  xl: "5px"
  xxl: "6px"
  xxxl: "7px"
  xxxxl: "8px"
rounded:
  sm: "2px"
  md: "3px"
  lg: "4px"
  xl: "6px"
  full: "9999px"
components:
  button-observed:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "7px 11px"
  input-observed:
    textColor: "{colors.on-surface}"
    rounded: "0px"
    padding: "4px 2px"
---

# Design System

## Overview
Design tokens extracted from oracleapex.com. The YAML front matter contains machine-readable values observed by Dembrandt when available; the sections below summarize the extracted evidence without redesigning or correcting the source site.

## Theme Style
Theme style: Iris

## Source Coverage
Scope: apex_pm/ut Universal Theme application, supplemented by oracleapex.cn/test/ut for pages that timed out on oracleapex.com.
Attempted pages: 48. Extracted pages: 48. Failed pages: 0.
Source hosts: oracleapex.com 31, oracleapex.cn 17.

### Design
- Design: https://oracleapex.com/ords/r/apex_pm/ut/design-overview

### Components
- Components: https://oracleapex.com/ords/r/apex_pm/ut/components
- Alert: https://oracleapex.com/ords/r/apex_pm/ut/alert-region
- Avatar: https://oracleapex.com/ords/r/apex_pm/ut/avatar-component
- Badges List: https://oracleapex.com/ords/r/apex_pm/ut/badges-list
- Badge: https://oracleapex.com/ords/r/apex_pm/ut/badge-component
- Breadcrumb: https://oracleapex.com/ords/r/apex_pm/ut/breadcrumb
- Button: https://oracleapex.com/ords/r/apex_pm/ut/buttons
- Button Container: https://oracleapex.com/ords/r/apex_pm/ut/button-container
- Button Group: https://oracleapex.com/ords/r/apex_pm/ut/button-container-region
- Calendar: https://oracleapex.com/ords/r/apex_pm/ut/calendars
- Card Regions: https://oracleapex.com/ords/r/apex_pm/ut/card-regions
- Card Templates: https://oracleapex.com/ords/r/apex_pm/ut/card-templates
- Carousel: https://oracleapex.com/ords/r/apex_pm/ut/carousel-region
- Charts: https://oracleapex.com/ords/r/apex_pm/ut/charts
- Classic Report: https://oracleapex.com/ords/r/apex_pm/ut/standard-reports
- Collapsible: https://oracleapex.com/ords/r/apex_pm/ut/collapsible-region
- Column Toggle Report: https://oracleapex.com/ords/r/apex_pm/ut/column-toggle-report
- Comments: https://oracleapex.com/ords/r/apex_pm/ut/comments-component
- Content Block: https://oracleapex.com/ords/r/apex_pm/ut/content-block
- Content Row: https://oracleapex.com/ords/r/apex_pm/ut/content-row-component
- Contextual Info: https://oracleapex.com/ords/r/apex_pm/ut/contextual-info
- Flexbox Container: https://oracleapex.com/ords/r/apex_pm/ut/flexbox-container-component
- Form Field: https://oracleapex.com/ords/r/apex_pm/ut/forms
- Help Text: https://oracleapex.com/ords/r/apex_pm/ut/help-text
- Hero: https://oracleapex.com/ords/r/apex_pm/ut/hero-region
- Image: https://oracleapex.com/ords/r/apex_pm/ut/region-image
- Inline Dialog: https://oracleapex.com/ords/r/apex_pm/ut/inline-dialog
- Interactive Grid: https://oracleapex.com/ords/r/apex_pm/ut/interactive-grid
- Interactive Report: https://oracleapex.com/ords/r/apex_pm/ut/interactive-report
- Links List: https://oracleapex.com/ords/r/apex_pm/ut/links-list
- List View: https://oracleapex.com/ords/r/apex_pm/ut/list-view
- Media List: https://oracleapex.com/ords/r/apex_pm/ut/media-list-component
- Menu Bar: https://oracleapex.com/ords/r/apex_pm/ut/menu-bar-list
- Menu Popup: https://oracleapex.com/ords/r/apex_pm/ut/menu-popup
- Metric Card: https://oracleapex.com/ords/r/apex_pm/ut/metric-card
- Navigation Bar: https://oracleapex.com/ords/r/apex_pm/ut/navigation
- PL/SQL Dynamic Content: https://oracleapex.com/ords/r/apex_pm/ut/dynamic-content-region
- Reflow Report: https://oracleapex.com/ords/r/apex_pm/ut/reflow-report
- Region Display Selector: https://oracleapex.com/ords/r/apex_pm/ut/region-display-selector
- Standard: https://oracleapex.com/ords/r/apex_pm/ut/standard-region
- Static Content: https://oracleapex.com/ords/r/apex_pm/ut/static-content
- Tabs Container: https://oracleapex.com/ords/r/apex_pm/ut/tabs
- Timeline: https://oracleapex.com/ords/r/apex_pm/ut/timeline-component
- Title Bar: https://oracleapex.com/ords/r/apex_pm/ut/title-bar-region
- Tree: https://oracleapex.com/ords/r/apex_pm/ut/tree
- Value Attribute Pairs: https://oracleapex.com/ords/r/apex_pm/ut/value-attr-pairs-report
- Wizard: https://oracleapex.com/ords/r/apex_pm/ut/wizard-region

### Extracted Page Sources
- Design: https://oracleapex.com/ords/r/apex_pm/ut/design-overview
- Components: https://oracleapex.com/ords/r/apex_pm/ut/components
- Alert: https://oracleapex.cn/ords/r/test/ut/alert-region
- Avatar: https://oracleapex.com/ords/r/apex_pm/ut/avatar-component
- Badges List: https://oracleapex.com/ords/r/apex_pm/ut/badges-list
- Badge: https://oracleapex.com/ords/r/apex_pm/ut/badge-component
- Breadcrumb: https://oracleapex.com/ords/r/apex_pm/ut/breadcrumb
- Button: https://oracleapex.cn/ords/r/test/ut/buttons
- Button Container: https://oracleapex.cn/ords/r/test/ut/button-container
- Button Group: https://oracleapex.com/ords/r/apex_pm/ut/button-container-region
- Calendar: https://oracleapex.com/ords/r/apex_pm/ut/calendars
- Card Regions: https://oracleapex.com/ords/r/apex_pm/ut/card-regions
- Card Templates: https://oracleapex.cn/ords/r/test/ut/card-templates
- Carousel: https://oracleapex.cn/ords/r/test/ut/carousel-region
- Charts: https://oracleapex.com/ords/r/apex_pm/ut/charts
- Classic Report: https://oracleapex.com/ords/r/apex_pm/ut/standard-reports
- Collapsible: https://oracleapex.cn/ords/r/test/ut/collapsible-region
- Column Toggle Report: https://oracleapex.com/ords/r/apex_pm/ut/column-toggle-report
- Comments: https://oracleapex.com/ords/r/apex_pm/ut/comments-component
- Content Block: https://oracleapex.cn/ords/r/test/ut/content-block
- Content Row: https://oracleapex.com/ords/r/apex_pm/ut/content-row-component
- Contextual Info: https://oracleapex.com/ords/r/apex_pm/ut/contextual-info
- Flexbox Container: https://oracleapex.com/ords/r/apex_pm/ut/flexbox-container-component
- Form Field: https://oracleapex.cn/ords/r/test/ut/forms
- Help Text: https://oracleapex.com/ords/r/apex_pm/ut/help-text
- Hero: https://oracleapex.cn/ords/r/test/ut/hero-region
- Image: https://oracleapex.cn/ords/r/test/ut/region-image
- Inline Dialog: https://oracleapex.com/ords/r/apex_pm/ut/inline-dialog
- Interactive Grid: https://oracleapex.cn/ords/r/test/ut/interactive-grid
- Interactive Report: https://oracleapex.cn/ords/r/test/ut/interactive-report
- Links List: https://oracleapex.com/ords/r/apex_pm/ut/links-list
- List View: https://oracleapex.com/ords/r/apex_pm/ut/list-view
- Media List: https://oracleapex.com/ords/r/apex_pm/ut/media-list-component
- Menu Bar: https://oracleapex.com/ords/r/apex_pm/ut/menu-bar-list
- Menu Popup: https://oracleapex.com/ords/r/apex_pm/ut/menu-popup
- Metric Card: https://oracleapex.com/ords/r/apex_pm/ut/metric-card
- Navigation Bar: https://oracleapex.com/ords/r/apex_pm/ut/navigation
- PL/SQL Dynamic Content: https://oracleapex.com/ords/r/apex_pm/ut/dynamic-content-region
- Reflow Report: https://oracleapex.cn/ords/r/test/ut/reflow-report
- Region Display Selector: https://oracleapex.com/ords/r/apex_pm/ut/region-display-selector
- Standard: https://oracleapex.cn/ords/r/test/ut/standard-region
- Static Content: https://oracleapex.com/ords/r/apex_pm/ut/static-content
- Tabs Container: https://oracleapex.cn/ords/r/test/ut/tabs
- Timeline: https://oracleapex.com/ords/r/apex_pm/ut/timeline-component
- Title Bar: https://oracleapex.cn/ords/r/test/ut/title-bar-region
- Tree: https://oracleapex.com/ords/r/apex_pm/ut/tree
- Value Attribute Pairs: https://oracleapex.cn/ords/r/test/ut/value-attr-pairs-report
- Wizard: https://oracleapex.com/ords/r/apex_pm/ut/wizard-region

## Colors
- **Primary** (#5FB9B5): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Secondary** (#B3311F): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Surface** (#FFFFFF): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **On Surface** (#161513): Observed color token extracted from the site's palette, semantic CSS, or component styles.

## Typography
- **Text 1**: -apple-system, 64px, regular
- **Text 2**: -apple-system, 32px, regular
- **Text 3**: -apple-system, 32px, bold
- **Text 4**: apex-core-font, 32px, regular
- **Text 5**: -apple-system, 32px, medium
- **Text 6**: -apple-system, 24.5px, regular

## Layout
Observed spacing scale: 8px spacing scale.
- **Spacing tokens**: base 8px, xs 1px, sm 2px, md 3px, lg 4px, xl 5px, xxl 6px, xxxl 7px, xxxxl 8px
- **Responsive breakpoints**: 1440px, 1400px, 1399px, 1200px, 1199px, 1120px

## Elevation & Depth
Observed box-shadow styles: rgb(0, 104, 140) 4px 0px 0px 0px inset; rgba(0, 0, 0, 0.1) 0px 2px 4px -3px; rgba(0, 0, 0, 0.1) 0px 2px 4px -2px

## Shapes
Observed rounded-corner tokens: sm 2px, md 3px, lg 4px, xl 6px, full 9999px.

## Components
- **Buttons**: Observed sample with radius 4px, background #161513, text #161513, padding 7px 11px, border 1px solid rgba(0, 0, 0, 0.075)
- **Inputs**: Observed sample with 0px solid border, 0px radius
