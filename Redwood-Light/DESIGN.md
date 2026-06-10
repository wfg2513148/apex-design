---
name: "Design Overview"
description: "Design tokens extracted from https://oracleapex.com/ords/r/apex_pm/ut/design-overview"
colors:
  primary: "#4F7D7B"
  secondary: "#D63B25"
  surface: "#EAEAEA"
  on-surface: "#161513"
typography:
  text-1:
    fontFamily: "Oracle Sans"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1
  text-2:
    fontFamily: "Oracle Sans"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.2
  text-3:
    fontFamily: "Oracle Sans"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.25
  text-4:
    fontFamily: "Oracle Sans"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
  text-5:
    fontFamily: "apex-core-font"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
  text-6:
    fontFamily: "Oracle Sans"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.5
  text-7:
    fontFamily: "Oracle Sans"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 2
  text-8:
    fontFamily: "Oracle Sans"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.29
  text-9:
    fontFamily: "Oracle Sans"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.5
  text-10:
    fontFamily: "Oracle Sans"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
  text-11:
    fontFamily: "Oracle Sans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1
  text-12:
    fontFamily: "Oracle Sans"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.33
  text-13:
    fontFamily: "fcicons"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1
  text-14:
    fontFamily: "Oracle Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1
  text-15:
    fontFamily: "Oracle Sans"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1
  text-16:
    fontFamily: "Oracle Sans"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: 1.5
  text-17:
    fontFamily: "Oracle Sans"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.2
  text-18:
    fontFamily: "Oracle Sans"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.4
  text-19:
    fontFamily: "apex-core-font"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  text-20:
    fontFamily: "Oracle Sans"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.33
  text-21:
    fontFamily: "Oracle Sans"
    fontSize: "16px"
    fontWeight: 400
  text-22:
    fontFamily: "Oracle Sans"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
  text-23:
    fontFamily: "Oracle Sans"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.25
  text-24:
    fontFamily: "apex-core-font"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
  text-25:
    fontFamily: "Oracle Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
  text-26:
    fontFamily: "Oracle Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  text-27:
    fontFamily: "Oracle Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.71
  text-28:
    fontFamily: "Oracle Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.67
  text-29:
    fontFamily: "Oracle Sans"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
  text-30:
    fontFamily: "SFMono-Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  text-31:
    fontFamily: "Oracle Sans"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.33
  text-32:
    fontFamily: "Oracle Sans"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.27
  text-33:
    fontFamily: "Oracle Sans"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 2.18
  text-34:
    fontFamily: "Oracle Sans"
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
  md: "4px"
  lg: "6px"
  xl: "8px"
  full: "9999px"
components:
  button-observed:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "6px 16px"
  input-observed:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "27px 7px 7px"
---

# Design System

## Overview
Design tokens extracted from oracleapex.com. The YAML front matter contains machine-readable values observed by Dembrandt when available; the sections below summarize the extracted evidence without redesigning or correcting the source site.

## Theme Style
Theme style: Redwood Light

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
- **Primary** (#4F7D7B): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Secondary** (#D63B25): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Surface** (#EAEAEA): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **On Surface** (#161513): Observed color token extracted from the site's palette, semantic CSS, or component styles.

## Typography
- **Text 1**: Oracle Sans, 64px, regular
- **Text 2**: Oracle Sans, 40px, extra-bold
- **Text 3**: Oracle Sans, 32px, extra-bold
- **Text 4**: Oracle Sans, 32px, regular
- **Text 5**: apex-core-font, 32px, regular
- **Text 6**: Oracle Sans, 32px, semi-bold

## Layout
Observed spacing scale: 8px spacing scale.
- **Spacing tokens**: base 8px, xs 1px, sm 2px, md 3px, lg 4px, xl 5px, xxl 6px, xxxl 7px, xxxxl 8px
- **Responsive breakpoints**: 1440px, 1400px, 1399px, 1200px, 1199px, 1120px

## Elevation & Depth
Observed box-shadow styles: rgba(0, 0, 0, 0.16) 0px 4px 8px -4px; rgba(22, 21, 19, 0.1) -1px 0px 0px 0px inset; rgba(22, 21, 19, 0.04) 0px 0px 0px 1px

## Shapes
Observed rounded-corner tokens: sm 2px, md 4px, lg 6px, xl 8px, full 9999px.

## Components
- **Buttons**: Observed sample with radius 4px, background #161513, text #161513, padding 6px 16px, border 0px solid rgba(22, 21, 19, 0.5)
- **Inputs**: Observed sample with 1px solid border, 4px radius
