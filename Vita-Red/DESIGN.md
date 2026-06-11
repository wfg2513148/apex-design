---
name: Vita - Red Design Overview
description: Design tokens extracted from https://oracleapex.com/ords/r/apex_pm/ut/design-overview
colors:
  primary: '#DA1B1B'
  secondary: '#FFC628'
  surface: '#fff'
  on-surface: '#000000'
typography:
  text-1:
    fontFamily: system-ui
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1
  text-2:
    fontFamily: system-ui
    fontSize: 32px
    fontWeight: 400
    lineHeight: 2
  text-3:
    fontFamily: system-ui
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
  text-4:
    fontFamily: apex-core-font
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1
  text-5:
    fontFamily: system-ui
    fontSize: 24.5px
    fontWeight: 400
    lineHeight: 1.5
  text-6:
    fontFamily: system-ui
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.5
  text-7:
    fontFamily: apex-core-font
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1
  text-8:
    fontFamily: system-ui
    fontSize: 24px
    fontWeight: 900
    lineHeight: 1.33
  text-9:
    fontFamily: system-ui
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
  text-10:
    fontFamily: system-ui
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.5
  text-11:
    fontFamily: system-ui
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
  text-12:
    fontFamily: system-ui
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
  text-13:
    fontFamily: fcicons
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1
  text-14:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 400
  text-15:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
  text-16:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
  text-17:
    fontFamily: apex-core-font
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
  text-18:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  text-19:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
  text-20:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
  text-21:
    fontFamily: system-ui
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.23
  text-22:
    fontFamily: system-ui
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  text-23:
    fontFamily: system-ui
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
  text-24:
    fontFamily: ui-monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  text-25:
    fontFamily: system-ui
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.27
  text-26:
    fontFamily: system-ui
    fontSize: 0px
    fontWeight: 400
spacing:
  base: 8px
  xs: 1px
  sm: 2px
  md: 3px
  lg: 4px
  xl: 5px
  xxl: 6px
  xxxl: 7px
  xxxxl: 8px
rounded:
  sm: 2px
  md: 3px
  lg: 4px
  xl: 6px
  full: 9999px
components:
  button-observed:
    backgroundColor: '#F8F8F8'
    textColor: '#393939'
    rounded: 2px
    padding: 7px 11px
  input-observed:
    backgroundColor: '#F9F9F9'
    textColor: '#202020'
    rounded: 2px
    padding: 25px 7px 5px
coverage:
  source: https://oracleapex.cn/ords/r/test/ut/design-overview
  canonicalHost: https://oracleapex.com/ords/r/apex_pm/ut
  themeStyle: Vita - Red
  themeStyleId: '1941380852169028559'
  themeClass: apex-theme-vita-red
  liveRootPrimary: '#da1b1b'
  standardComponents: 46
  designPages: 11
  componentAndIconPages: 60
  uniqueVitaRedPages: 71
  requiredMenuEntries: 73
  browserVerifiedVitaRedPages: 71
  liveComponentPagesScraped: 59
  liveComponentPagesVitaRedVerified: 59
  liveComponentTemplateOptionPages: 31
  liveComponentEvidenceAt: '2026-06-10T18:44:18Z'
  capturedAt: '2026-06-10T18:44:18Z'
resources:
  readme: "README.md"
  manifest: "design-system.manifest.json"
  tokens: "tokens/vita-red.tokens.json"
  css: "styles/vita-red-open-design.css"
  reference: "reference/apex-reference.json"
  referenceGuide: "reference/implementation-guidelines.md"
  pageTemplates: "patterns/page-templates.json"
  enterprisePatterns: "patterns/enterprise-patterns.json"
  componentStates: "patterns/component-state-matrix.json"
  patternsGuide: "patterns/README.md"
  componentCatalog: "catalog/component-catalog.json"
  navigationIconCatalog: "catalog/navigation-icon-catalog.json"
  openDesignReadiness: "catalog/open-design-readiness.json"
  catalogGuide: "catalog/README.md"
  example: "examples/enterprise-hr-dashboard.html"
componentPatterns:
  shell:
    bodyBackground: '#FDFDFD'
    contentBackground: '#fff'
    headerBackground: '#da1b1b'
    headerText: '#000000'
    sideNavigationBackground: '#F0F0F0'
    sideNavigationText: '#606060'
    titleBackground: '#FFFFFF'
    titleText: '#000000'
    focusColor: '#da1b1b'
  button:
    backgroundColor: '#F8F8F8'
    hoverBackgroundColor: '#F8F8F8'
    textColor: '#393939'
    borderColor: rgba(0,0,0,0.075)
    rounded: 2px
    padding: 7px 11px
    fontSize: 12px
    lineHeight: 16px
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -3px
  button-primary:
    backgroundColor: '#DA1B1B'
    textColor: '#FFFFFF'
    borderColor: rgba(0,0,0,0.075)
  input:
    backgroundColor: '#F9F9F9'
    focusBackgroundColor: '#F9F9F9'
    textColor: '#202020'
    borderColor: '#DFDFDF'
    focusBorderColor: '#da1b1b'
    rounded: 2px
    padding: 25px 7px 5px
  region:
    backgroundColor: '#FFFFFF'
    textColor: '#262626'
    borderColor: rgba(0,0,0,0.1)
    rounded: 2px
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -2px
    headerFontSize: 16px
    headerFontWeight: 600
  card:
    backgroundColor: '#FFFFFF'
    borderColor: rgba(0,0,0,0.1)
    rounded: 4px
    shadow: none
    iconBackground: '#da1b1b'
  report:
    backgroundColor: '#FFFFFF'
    borderColor: rgba(0,0,0,0.1)
    headerBackground: '#FFFFFF'
    cellBorderColor: '#E6E6E6'
    fontSize: 12px
    cellHeight: 32px
  badge:
    backgroundColor: '#FFC628'
    textColor: '#000000'
    rounded: 4px
    fontSize: 13px
  status:
    success: '#388729'
    warning: '#FBCE4A'
    danger: '#CB1100'
    info: '#056AC8'
---
# Oracle APEX Universal Theme - Vita - Red Design System

## Overview

This DESIGN.md is scoped to the **Vita - Red** theme style of Oracle APEX Universal Theme. It is intended for Open Design import so product managers and design agents can generate APEX-style application prototypes with source-backed Vita - Red component patterns. Keep this file independent from Iris, Redwood Light, Vita, Vita - Dark, Vita - Red, and Vita - Slate unless a task explicitly asks for a comparison.

The source evidence was collected from the public Universal Theme application after switching the right-side **Theme Style** menu to **Vita - Red**. Verification signals: 71 unique Design, Components, and Icons paths carried `apex-theme-vita-red`, the root primary token resolved to `#da1b1b`, and 59 live component pages were scraped with 31 Template Options pages captured. Canonical component URLs remain on `oracleapex.com`; `oracleapex.cn` is cited as the fallback evidence host used for live theme switching and timeout recovery.

## Theme Style

- Theme style: **Vita - Red**
- Theme style id: `1941380852169028559`
- Theme class: `apex-theme-vita-red`
- Root primary token: `#da1b1b`
- Visual signature: Light Vita structure with red primary header/action emphasis and neutral side navigation
- Unique Design, Components, and Icons pages verified: 71 / 71
- Live component pages scraped: 59 / 59
- Template Options pages captured: 31


## Companion Resources

Use these files with this `DESIGN.md` when Open Design or another prototyping tool needs more than prose guidance:

- `design-system.manifest.json`: machine-readable package manifest, canonical/fallback source URLs, official runtime asset references, and Open Design import hints.
- `README.md`: local package guide for using the Vita - Red directory as a complete Open Design design-system package.
- `tokens/vita-red.tokens.json`: machine-readable tokens for colors, typography, spacing, radius, shadows, sizes, and APEX class mappings.
- `styles/vita-red-open-design.css`: compact prototype CSS that maps Vita - Red tokens to common APEX classes such as `t-Header`, `t-Body-nav`, `t-Region`, `t-Button`, `a-IRR-table`, `a-GV-table`, `t-Card`, and `t-Icon`.
- `reference/apex-reference.json`: machine-readable Reference layer covering APEX tools, utility classes, CSS variables, JavaScript events/APIs, and change-log boundaries.
- `reference/implementation-guidelines.md`: implementation guidance for using Reference pages in enterprise prototypes without inventing non-APEX CSS or runtime contracts.
- `patterns/page-templates.json`: page shell, 12-column grid, page-template, Dialog, Drawer, and inline overlay guidance.
- `patterns/enterprise-patterns.json`: enterprise page blueprints for dashboards, report workspaces, editable grids, master-detail pages, transaction forms, approvals, and wizards.
- `patterns/component-state-matrix.json`: component variants and interaction states for buttons, forms, regions, reports, grids, filters, badges, overlays, timelines, and wizards.
- `catalog/component-catalog.json`: machine-readable standard component catalog derived from the 46-component extraction table.
- `catalog/navigation-icon-catalog.json`: navigation entries, navigation classes, Font APEX families, observed icon categories, and representative `fa-*` classes.
- `catalog/open-design-readiness.json`: readiness audit for the artifacts needed to generate enterprise Open Design prototypes.
- `examples/enterprise-hr-dashboard.html`: an enterprise HR dashboard example showing shell, title region, cards, report, form, and timeline patterns using the local CSS.

The manifest records the official Oracle APEX runtime CSS, JavaScript, and Font APEX resources. Do not vendor Oracle runtime assets into this repository; load them from an APEX runtime when exact fidelity is required.

## Reference Implementation Layer

The package includes a Reference layer verified from the Universal Theme Reference navigation. Use this layer when a generated prototype needs APEX-compatible classes, template logic, or runtime behavior notes. Target Universal Theme 26.1 behavior unless a prompt explicitly asks for migration from an older theme.

## Enterprise Application Pattern Layer

The `patterns/` files translate observed Universal Theme pages into generation blueprints for enterprise screens: page templates, report workspaces, editable grids, master-detail management, transaction forms, approval workflows, guided wizards, and component state matrices. Keep the output scoped to **Vita - Red** and `.apex-theme-vita-red`.

## Machine-Readable Catalog Layer

The `catalog/` files mirror the standard component table, navigation evidence, icon system, and readiness audit in a format that Open Design can consume without parsing Markdown. Use them for component selection, navigation/icon fidelity, and import completeness checks.

## Vita Red Coverage Model

Open Design should treat this file as the Vita - Red-only extraction for the Universal Theme **Design**, **Components**, and **Icons** navigation groups. The canonical URL for every listed page is `https://oracleapex.com/ords/r/apex_pm/ut/<path>`; the fallback evidence host used for live verification was `https://oracleapex.cn/ords/r/test/ut/<path>`.

### Design Menu

- **Design Overview** (`design-overview`), **Colors** (`colors`), **Navigation** (`navigation`), **Grid Layout** (`grid-layout`), **Page Templates** (`pages`), and **Theme Styles** (`theme-styles`): preserve Vita - Red's shell, surface, navigation, and page title behavior exactly as observed.
- **Mobile Patterns / Navigation** (`navigation2`), **Headers and Footers** (`headers-and-footers`), **Data Entry** (`data-entry2`), **Touch Gestures** (`touch-gestures`), and **jQuery Mobile Components** (`jquery-mobile-components`): apply the same density and token defaults to mobile navigation, mobile data entry, gestures, headers, footers, and jQuery Mobile component patterns.

## Vita Red Token Contract

### Color

- Root primary/action token: `#da1b1b`
- Body canvas: `#FDFDFD`
- Component surface: `#fff`
- Side navigation: `#F0F0F0` with `#606060` text
- Title area: `#FFFFFF` with `#000000` text
- Report/grid cell separators: `#E6E6E6`

### Shape, Spacing, And Density

- Base layout rhythm: 8px
- Button height: `32px`
- Text field height: `48px`
- Interactive Grid data row height: `32px`
- Badge radius: `4px`
- Metric Card frame: about `200px` by `146px`

## Component Design Patterns

### Application Shell And Navigation

Vita - Red screens should still look like Oracle APEX workspaces: compact header, left navigation, title/breadcrumb region, and dense content regions. Do not use generic danger-red surfaces everywhere; use red as the primary action/header accent while keeping APEX white regions.

### Buttons

Neutral buttons use `#F8F8F8` background, `#393939` text, `rgba(0,0,0,0.075)` border, `2px` radius, `12px` font size, and `7px 11px` padding. Hot buttons use `#DA1B1B` with `#FFFFFF` text.

### Forms

Inputs use `#F9F9F9` background, `#202020` text, `#DFDFDF` border, `2px` radius, and `25px 7px 5px` padding. Preserve APEX label/help/validation density and floating-label spacing.

### Regions

Regions are the main composition primitive. Use `#FFFFFF` region backgrounds, `rgba(0,0,0,0.1)` borders, `2px` radius, and `rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` shadows. Template Options frequently include header visibility, heading level, body padding, maximize button, body height, icon display, and collapsibility.

### Reports, Interactive Reports, And Interactive Grids

Reports are dense. Use `#FFFFFF` grid backgrounds, `12px` cell text, `32px` grid row height, `#E6E6E6` cell separators, compact toolbar rows, and visible column headers. Interactive Grid and Interactive Report expose Template Options for Remove Borders, Show Maximize Button, Header visibility, Heading Level, item spacing, item size, stretch form fields, and label alignment.

### Cards, Lists, Metrics, And Activity

Cards, Metric Cards, Media Lists, Content Rows, Comments, and Timeline components should remain compact and data-first. Use icon/avatar slots, title/value text, secondary text, badges/status, and row actions. Do not convert these components into generic marketing cards.

## Live Vita - Red Component Extraction Pass

A Playwright extraction pass visited the 59 unique Components pages listed below on the `oracleapex.cn` fallback host after switching the session to **Vita - Red**. Every visited component page carried `apex-theme-vita-red` and resolved the root primary token to `#da1b1b`; no component page failed to load.

This pass inspected the Universal Theme component-page anatomy: page title and breadcrumb, Overview block, Demo block with live components, and Template Options configuration region when the page exposes one. Template Options were not exhaustively toggled, but option families and visible preview targets were captured so Open Design can generate variants that remain faithful to APEX.

### Measured Vita - Red Defaults From Live Components

- **Page anatomy**: component pages preserve the Universal Theme sample-app shape: title/breadcrumb chrome, Overview, Instructions, Demo, and Template Options sections. Use this structure when building component demos or APEX documentation screens.
- **Shell**: body background `#FDFDFD`, side navigation `#F0F0F0`, title area `#FFFFFF`, and primary/focus token `#da1b1b`. Do not use generic danger-red surfaces everywhere; use red as the primary action/header accent while keeping APEX white regions.
- **Buttons**: neutral `t-Button` controls are about `32px` high with `#F8F8F8` background, `#393939` text, 2px radius, 12px type, 16px line height, and 7px/11px padding. Hot buttons use `#DA1B1B` with `#FFFFFF` text.
- **Forms**: text fields use `#F9F9F9` background, `#202020` text, `#DFDFDF` border, 2px radius, 14px type, and a `48px` floating-label height. Preserve compact APEX labels and item help/validation patterns.
- **Regions**: standard frames and Template Options accordions use compact APEX region headers, generally 48px high with 16px / 600 titles. Template Options commonly alter body padding, header visibility, heading level, icon display, height, collapsibility, and maximize affordances.
- **Reports and grids**: Interactive Grid uses `#FFFFFF` surfaces with `rgba(0,0,0,0.1)` borders. Data cells use 12px text, 16px line height, `32px` row height, 4px/8px cell padding, and `#E6E6E6` separators. Interactive Report uses the same dense toolbar/header model.
- **Status components**: Alert regions use `#FFFFFF` surfaces, `rgba(0,0,0,0.1)` borders, 4px radius, and rgba(0, 0, 0, 0.1) 0px 2px 4px -2px shadow. Warning badges use `#FFC628` with `#000000` text, 4px radius, 13px type, and 4px/8px padding.
- **Identity and activity**: large avatars render as `96px` blocks with 6px radius and `#BFC8D1` background. Activity components combine avatar, title/body, metadata, badge/status, and compact row actions.
- **Cards and metrics**: Metric Card examples are roughly `200px` by `146px` with 16px padding. Cards, CardView, Media List, Content Row, and Timeline share tight spacing, slot-based icon/avatar/badge layouts, and data-first text hierarchy.
- **Navigation components**: Breadcrumb, Links List, Menu Bar, Navigation Bar, Tree, Tabs, Title Bar, and Wizard are application navigation widgets. Keep APEX density, active states, and right-arrow/badge/step variants.

### Core Component Extraction Matrix

| Component page | Live selectors and classes | Template Option families observed | Reproduction rule |
| --- | --- | --- | --- |
| Alert (`alert-region`) | selectors: `alert`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Highlight Background, Alert Display, Horizontal, Wizard, Alert Icons, Hide Icons, Show Default Icons, Show Custom Icons, Alert Type, Warning | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Avatar (`avatar-component`) | selectors: `avatar`; top classes: `t-Avatars-item, t-Avatar, t-Avatar--image, t-Avatar--lg` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Badge (`badge-component`) | selectors: `badge, interactiveReport, gridHeaderCell, gridCell, pagination`; top classes: `t-Badge, t-Badge-value, t-Badge--success, t-Badge--info` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Badge List (`badges-list`) | selectors: `contentBlock/text structure`; top classes: `t-BadgeList-item, t-BadgeList-wrap, t-BadgeList-label, t-BadgeList-value` | Apply Theme Colors, Style, Circular, Grid, Layout, Stacked, 2 Column Grid, 3 Column Grid, 4 Column Grid, 5 Column Grid | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Breadcrumb (`breadcrumb`) | selectors: `breadcrumb, titleBar`; top classes: `t-ContentBlock-headerItems, apex-col-auto, t-Breadcrumb-item, t-Breadcrumb-label` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| Buttons (`buttons`) | selectors: `primaryButton`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Size, Tiny, Small, Large, Type, Normal, Primary, Warning, Danger, Success | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Button Group (`button-container-region`) | selectors: `button, formField`; top classes: `t-Icon, t-Button, t-ContentBlock-headerItems, t-Button--noLabel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Button Container (`button-container`) | selectors: `primaryButton, toolbar`; top classes: `t-Icon, t-ButtonRegion-col, t-ButtonRegion-buttons, t-Button` | Stick to Bottom for Mobile, Body Padding, No Padding, Slim Padding, Style, Borderless, Heading Level, Item Spacing, Standard, Slim | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Calendar (`calendars`) | selectors: `calendar`; top classes: `fc-day, fc-scrollgrid-sync-inner, fc-daygrid-day, fc-daygrid-day-frame` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Card Regions (`card-regions`) | selectors: `cardList, pagination`; top classes: `a-CardView-item, a-CardView, a-CardView-header, a-CardView-iconWrap` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Card Templates (`card-templates`) | selectors: `card, cardList, pagination`; top classes: `apex-item-option, t-ContentBlock-headerItems, t-Icon, t-Form-fieldContainer` | Apply Theme Colors, Display Subtitle, Style, Basic, Compact, Featured, Block, Icons, No Icons, Display Icons | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Carousel (`carousel-region`) | selectors: `tabs`; top classes: `a-Icon, a-Tabs-after, a-Region-carouselItem, a-Tabs-panel` | Show Next and Previous Buttons, Show Maximize Button, Show Region Icon, Timer, No Timer, 5 Seconds, 10 Seconds, 15 Seconds, 20 Seconds, Body Height | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Charts (`charts`) | selectors: `chart`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Collapsible (`collapsible-region`) | selectors: `button, region, regionHeader, regionBody, formField`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Collapsible Icon Position, Start, End, Collapsible Button Icons, Arrows, Plus or Minus, Default State, is-expanded, Expanded, is-collapsed | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Comments Component (`comments-component`) | selectors: `avatar, comment`; top classes: `t-Comments-item, t-Comments-icon, t-Avatar, t-Avatar--initials` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Comments Report (`comments-report`) | selectors: `comment, pagination`; top classes: `t-ContentBlock-headerItems, t-AVPList-label, t-AVPList-value, apex-item-option` | Comments Style, Basic, Speech Bubbles, Icon Shape, Circle, Square, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Content Block (`content-block`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Add Body Padding, Show Region Icon, Large, Medium, Small, Header, Hidden, Hidden but accessible, Body Style, Shadow Background | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Content Row Component (`content-row-component`) | selectors: `primaryButton, avatar, contentRow`; top classes: `t-Icon, t-Button, t-Button--icon, t-Button--noLabel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Content Row Report (`content-row-report`) | selectors: `contentRow, pagination`; top classes: `t-Icon, t-Button, t-ContentRow-item, t-ContentRow-wrap` | Style, Compact, Content Alignment, Center (Default), Top, Stack on Mobile, Stack, Pagination Display, Hide when all rows displayed, Selection | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Contextual Info (`contextual-info`) | selectors: `pagination`; top classes: `t-ContentBlock-headerItems, t-ContextualInfo-item, t-ContextualInfo-label, t-ContextualInfo-value` | Hide Empty Values, Display Items, Inline (Default), Stacked, Display Labels, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Classic Report / Data Tables and Reports (`standard-reports`) | selectors: `classicReport, gridCell, pagination`; top classes: `t-Report-cell, t-Report-colHead, a-Report-SortHeading-Anchor--event, t-ContentBlock-headerItems` | Stretch Report, Alternating Rows, Enable, Disable, Horizontal Only, Vertical Only, No Borders, No Outer Borders, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Interactive Report (`interactive-report`) | selectors: `interactiveReport, gridHeaderCell, gridCell, pagination`; top classes: `a-Button, a-IRR-button, a-Icon, a-IRR-header` | Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Item Spacing, Standard, Slim, None, Item Size | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Interactive Grid (`interactive-grid`) | selectors: `select, interactiveGrid, gridHeaderCell, gridCell, toolbar, pagination`; top classes: `a-GV-cell, a-Icon, a-Button, a-GV-row` | Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Item Spacing, Standard, Slim, None, Item Size | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Faceted Search (`reports-faceted-search`) | selectors: `textInput, classicReport, gridCell, toolbar, pagination`; top classes: `t-Report-cell, apex-item-option, apex-item-option-badge, a-Icon` | Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Hidden | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Smart Filters (`reports-smart-filters`) | selectors: `textInput, classicReport, gridCell, pagination`; top classes: `t-Report-cell, apex-item-option, apex-item-option-badge, t-Report-colHead` | Heading Level, Item Spacing, Standard, Slim, None, Item Size, Large, X Large, Item Width, Stretch Form Fields | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Search Region (`reports-search-region`) | selectors: `textInput`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Apply Theme Colors, Boxed, Flat, Icon Size, Initial, Small, Medium, Large, Heading Level, Item Spacing | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Reflow Report (`reflow-report`) | selectors: `button, region, regionHeader, regionBody, formField`; top classes: `a-Table-cellLabel, apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel` | Add Body Padding, Show Region Icon, Large, Medium, Small, Header, Hidden, Hidden but accessible, Body Style, Shadow Background | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Column Toggle Report (`column-toggle-report`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Dynamic Content Region (`dynamic-content-region`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Flexbox Container (`flexbox-container-component`) | selectors: `region, regionHeader, regionBody`; top classes: `t-Region-headerItems, t-Region-buttons, t-Region-buttons-left, t-Region-buttons-right` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Forms (`form-item-types`) | selectors: `textInput, select, toolbar, map`; top classes: `apex-item-option, t-Form-fieldContainer, apex-item-wrapper, t-Form-labelContainer` | Heading Level, Item Spacing, Standard, Slim, None, Item Size, Large, X Large, Item Width, Stretch Form Fields | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Form Labels (`forms`) | selectors: `textInput`; top classes: `apex-item-option, t-Form-fieldContainer, apex-item-wrapper, t-Form-labelContainer` | Hide Password Visibility, Stretch Form Item, Size, Large, X Large, Item Pre Text, Display as Block, Item Post Text, Top Margin, margin-top-none | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Help Text (`help-text`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, a-Tabs-panel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Hero (`hero-region`) | selectors: `hero`; top classes: `t-HeroRegion-col, t-ContentBlock-headerItems, t-Icon, t-ContentBlock-header` | Style, Featured, Stacked Featured, Display Icon, No, Icon Shape, Circle, Square, Heading Font, Alternative | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Image (`region-image`) | selectors: `image`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Image Stretch, Auto, 1:1 (Square), 16:9 (Widescreen), 4:3 (Standard), 2:1 (Univisium), Scale, Contain, Cover, Fill | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Links List (`links-list`) | selectors: `linksList, pagination`; top classes: `t-Icon, t-ContentBlock-headerItems, t-LinksList-item, t-LinksList-link` | Show Badges, Show Right Arrow, Disable Text Wrapping, Style, Actions, Display Icons, No Icons, For Top Level Items Only, For All Items | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| List View (`list-view`) | selectors: `region, regionHeader, regionBody`; top classes: `a-ListView-item, t-ContentBlock-headerItems, apex-col-auto, t-Icon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Map (`map`) | selectors: `map`; top classes: `t-Region-headerItems, t-ContentBlock-headerItems, a-Icon, t-Region-buttons` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Media List Component (`media-list-component`) | selectors: `select, badge, avatar, mediaList`; top classes: `t-MediaList--showIcons, t-MediaList-item, t-MediaList-itemWrap, t-MediaList-itemWrap--showDesc` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Media List Report (`media-list`) | selectors: `mediaList, pagination`; top classes: `t-ContentBlock-headerItems, apex-item-option, t-Icon, t-Form-fieldContainer` | Show Icons, Show Description, Show Badges, Apply Theme Colors, Size, Large, Layout, 2 Column Grid, 3 Column Grid, 4 Column Grid | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Menu Bar (`menu-bar-list`) | selectors: `pagination, menuBar`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, t-ContentBlock-header` | Behave Like Tabs, Show Sub Menu Icons, Add Actions, Display Menu Callout | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| Menu Popup (`menu-popup`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Icon, t-ContentBlock, t-ContentBlock--h2` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Metric Card (`metric-card`) | selectors: `badge, avatar, metric`; top classes: `t-MetricCards-item, t-MetricCard, t-MetricCard-body, t-MetricCard-avatar` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Modal Dialogs (`page-dialog`) | selectors: `button`; top classes: `t-Button, t-Button-label, t-ContentBlock-headerItems, t-Button--gapLeft` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Page Drawer (`page-drawer`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Inline Dialog (`inline-dialog`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Inline Drawer (`inline-drawer`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Inline Popup (`inline-popup`) | selectors: `button`; top classes: `t-Button, t-Button-label, t-ContentBlock-headerItems, t-Button--gapLeft` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Navigation Bar (`navigation`) | selectors: `button`; top classes: `t-Icon, t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| Standard (`standard-region`) | selectors: `region, regionHeader, regionBody`; top classes: `t-ContentBlock-headerItems, t-Icon, t-Region-headerItems, t-Region-buttons` | Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Hidden | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Static Content (`static-content`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, a-Tabs-panel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Region Display Selector (`region-display-selector`) | selectors: `region, regionHeader, regionBody`; top classes: `t-Region-headerItems, t-Region-buttons, t-Region-buttons-left, t-Region-buttons-right` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Tabs Container (`tabs`) | selectors: `tabs`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Tabs Icon, Above Label, Inline with Label, Layout, Fill Tab Labels, Tabs Style, Simple, Pill, Tabs Size, Small | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |
| Timeline Component (`timeline-component`) | selectors: `badge, avatar`; top classes: `t-Timeline-item, t-Timeline-wrap, t-Timeline-user, t-Avatar` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Timeline Report (`timeline-reports`) | selectors: `pagination`; top classes: `t-Icon, t-Timeline-item, t-Timeline-wrap, t-Timeline-user` | Style, Compact, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Title Bar (`title-bar-region`) | selectors: `breadcrumb, titleBar`; top classes: `t-ContentBlock-headerItems, t-BreadcrumbRegion-buttons, t-ContentBlock-header, t-ContentBlock-headerItems--title` | Show Breadcrumbs, Use Compact Style, Use Current Breadcrumb Entry, Use Region Title, Heading Font, Alternative, Heading Level, Item Spacing, Standard, Slim | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| Tree (`tree`) | selectors: `tree`; top classes: `a-TreeView-node, a-TreeView-row, a-TreeView-content, a-Icon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation: dense rows, supplied icons, current-state affordances, right arrows/badges when enabled, and Wizard step semantics. |
| Value Attribute Pairs Report (`value-attr-pairs-report`) | selectors: `pagination`; top classes: `t-ContentBlock-headerItems, apex-item-option, t-ContentBlock, t-ContentBlock-header` | Label Width, Fixed - Small, Fixed - Medium, Fixed - Large, Variable - Small, Variable - Medium, Variable - Large, Layout, Left Aligned Details, Pagination Display | Keep the report/table first: compact toolbar, visible headers, dense grid rows, component-specific borders, and pagination close to the data. |
| Wizards / Wazards (`wizard-region`) | selectors: `primaryButton, wizard`; top classes: `t-WizardSteps-step, t-WizardSteps-wrap, t-WizardSteps-marker, t-WizardSteps-label` | Vertical Orientation, Make Wizard Steps Clickable, Label Display, All Steps, Current Step Only, Hide Labels | Preserve APEX region mechanics: app surface, compact controls, and Template Options that visibly alter padding, headers, icons, height, and layout. |

## Full Standard Component Catalog

| Component | APEX Type | Captured roles | Template Options / attributes observed | Canonical page |
| --- | --- | --- | --- | --- |
| Alert | Region | button, region, region-header, alert, breadcrumb, button-group, collapsible, content-block, form-field, nav | Highlight Background, Alert Display, Horizontal, Wizard, Alert Icons, Hide Icons, Show Default Icons, Show Custom Icons, Alert Type, Warning, Danger, Information, Success, Alert Title | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/alert-region) |
| Avatar | Partial | button, region, region-header, avatar, breadcrumb, classic-report, collapsible, content-block, form-field, interactive-report | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/avatar-component) |
| Badges List | List | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Apply Theme Colors, Style, Circular, Grid, Layout, Stacked, 2 Column Grid, 3 Column Grid, 4 Column Grid, 5 Column Grid, Span Horizontally, Float Items, Flexible Box, Badge Size | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/badges-list) |
| Badge | Partial | button, region, region-header, badge, breadcrumb, classic-report, collapsible, content-block, form-field, interactive-report | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/badge-component) |
| Breadcrumb | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/breadcrumb) |
| Button | Button | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Size, Default, Tiny, Small, Large, Type, Normal, Primary, Warning, Danger, Success, Style, Simple, Remove UI Decoration | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/buttons) |
| Button Container | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Stick to Bottom for Mobile, Body Padding, Default, No Padding, Slim Padding, Style, Borderless, Remove UI Decoration, Heading Level, H1, H2, H3, H4, H5 | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/button-container) |
| Button Group | Button | button, breadcrumb, button-group, content-block, form-field, nav, rds, tabs, title-bar | Radio Group, Option A, Option B, Option C, Radio Button Group | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/button-container-region) |
| Calendar | Region | button, breadcrumb, calendar, content-block, form-field, nav, report, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/calendars) |
| Card Regions | Region | button, region, region-header, breadcrumb, card, collapsible, content-block, form-field, nav, rds | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/card-regions) |
| Card Templates | Report, List | button, region, region-header, breadcrumb, button-group, card, collapsible, content-block, form-field, nav | Apply Theme Colors, Display Subtitle, Style, Basic, Compact, Featured, Block, Icons, No Icons, Display Icons, Display Initials, Layout, Stacked, 2 Columns | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/card-templates) |
| Carousel | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Remove Body Padding, Remember Carousel Slide, Show Next and Previous Buttons, Show Maximize Button, Show Region Icon, Timer, No Timer, 5 Seconds, 10 Seconds, 15 Seconds, 20 Seconds, Body Height, Auto - Default, 240px | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/carousel-region) |
| Charts | Region | button, breadcrumb, chart, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/charts) |
| Classic Report | Report | button, region, region-header, breadcrumb, button-group, classic-report, collapsible, content-block, form-field, nav | Stretch Report, Alternating Rows, Enable, Disable, Row Highlighting, Report Border, Default, Horizontal Only, Vertical Only, No Borders, No Outer Borders, Pagination Display, Hide when all rows displayed | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/standard-reports) |
| Collapsible | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Remove Body Padding, Remember Collapsible State, Collapsible Icon Position, Start, End, Collapsible Button Icons, Arrows, Plus or Minus, Default State, Expanded, Collapsed, Body Height, Auto - Default, 240px | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/collapsible-region) |
| Column Toggle Report | Report | button, breadcrumb, content-block, form-field, nav, report, rds, tabs, title-bar | Task Name, Start Date, End Date, Status, Assigned To, Cost, Budget | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/column-toggle-report) |
| Comments | Region | button, region, region-header, avatar, breadcrumb, collapsible, comments, content-block, form-field, nav | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/comments-component) |
| Content Block | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Add Body Padding, Show Region Icon, Region Title, Large, Medium, Small, Header, Visible - Default, Hidden, Hidden but accessible, Body Style, Default, Shadow Background, Light Background | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/content-block) |
| Content Row | Region | button, region, region-header, avatar, breadcrumb, collapsible, content-block, content-row, form-field, nav | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/content-row-component) |
| Contextual Info | Report | button, region, region-header, breadcrumb, button-group, collapsible, content-block, contextual-info, form-field, nav | Hide Empty Values, Display Items, Inline (Default), Stacked, Display Labels, Pagination Display, Default, Hide when all rows displayed | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/contextual-info) |
| Flexbox Container | Region | button, region, region-header, breadcrumb, content-block, form-field, nav, plsql, rds, standard-region | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/flexbox-container-component) |
| Form Field | Form | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Text Field, Hide Password Visibility, Stretch Form Item, Size, Default, Large, X Large, Item Pre Text, Display as Block, Item Post Text, Top Margin, None, Small, Medium | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/forms) |
| Help Text | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/help-text) |
| Hero | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, hero, nav | Remove Body Padding, Style, Default, Featured, Stacked Featured, Display Icon, Yes (Default), No, Icon Shape, Rounded Corners, Circle, Square, Heading Font, Alternative | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/hero-region) |
| Image | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, image, nav | Image Stretch, Ratio, Auto, 1:1 (Square), 16:9 (Widescreen), 4:3 (Standard), 2:1 (Univisium), Scale, Contain, Cover, Fill, Scale Down, Shape, Square | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/region-image) |
| Inline Dialog | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/inline-dialog) |
| Interactive Grid | Report | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, interactive-grid, nav | Remove Borders, Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Default, H1, H2, H3, H4, H5, H6, Item Spacing | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/interactive-grid) |
| Interactive Report | Report | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, interactive-report, nav | Remove Borders, Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Default, H1, H2, H3, H4, H5, H6, Item Spacing | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/interactive-report) |
| Links List | List | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, links-list, nav | Show Badges, Show Right Arrow, Disable Text Wrapping, Style, Default, Actions, Display Icons, No Icons, For Top Level Items Only, For All Items | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/links-list) |
| List View | List | button, region, region-header, breadcrumb, content-block, form-field, list-view, nav, plsql, rds | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/list-view) |
| Media List | Region | button, region, region-header, avatar, badge, breadcrumb, collapsible, content-block, form-field, media-list | Order By | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/media-list-component) |
| Menu Bar | List | button, region, region-header, breadcrumb, collapsible, content-block, form-field, menu, nav, plsql | Behave Like Tabs, Show Sub Menu Icons, Add Actions, Display Menu Callout | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/menu-bar-list) |
| Menu Popup | List | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/menu-popup) |
| Metric Card | Region | button, region, region-header, avatar, badge, breadcrumb, collapsible, content-block, form-field, metric-card | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/metric-card) |
| Navigation Bar | List | button, breadcrumb, content-block, form-field, nav, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/navigation) |
| PL/SQL Dynamic Content | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/dynamic-content-region) |
| Reflow Report | Report | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Add Body Padding, Show Region Icon, Region Title, Large, Medium, Small, Header, Visible - Default, Hidden, Hidden but accessible, Body Style, Default, Shadow Background, Light Background | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/reflow-report) |
| Region Display Selector | Region | button, region, region-header, breadcrumb, content-block, form-field, nav, plsql, rds, standard-region | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/region-display-selector) |
| Standard | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Remove Body Padding, Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Visible - Default, Hidden, Hidden but accessible, Accent | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/standard-region) |
| Static Content | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/static-content) |
| Tabs Container | Region, List | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Remember Active Tab, Tabs Icon, None - Default, Above Label, Inline with Label, Layout, Default, Fill Tab Labels, Tabs Style, Simple, Pill, Tabs Size, Small, Large | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/tabs) |
| Timeline | Region | button, region, region-header, avatar, badge, breadcrumb, collapsible, content-block, form-field, nav | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/timeline-component) |
| Title Bar | Region | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Show Breadcrumbs, Use Compact Style, Region Title, Use Current Breadcrumb Entry, Use Region Title, Heading Font, Default, Alternative, Heading Level, H1, H2, H3, H4, H5 | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/title-bar-region) |
| Tree | Region | button, breadcrumb, content-block, form-field, nav, rds, tabs, title-bar, tree | No page-level Template Options captured; use component default. | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/tree) |
| Value Attribute Pairs | Report | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Label Width, Default, Fixed - Small, Fixed - Medium, Fixed - Large, Variable - Small, Variable - Medium, Variable - Large, Layout, Left Aligned Details, Right Aligned Details, Pagination Display, Hide when all rows displayed, Hide Empty Values | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/value-attr-pairs-report) |
| Wizard | Region, List, Page | button, region, region-header, breadcrumb, button-group, collapsible, content-block, form-field, nav, plsql | Vertical Orientation, Make Wizard Steps Clickable, Label Display, All Steps, Current Step Only, Hide Labels | [canonical](https://oracleapex.com/ords/r/apex_pm/ut/wizard-region) |

## Open Design Generation Rules

- Generate Vita - Red-only Oracle APEX screens. Do not combine this file with Iris, Redwood Light, Vita, Vita - Dark, Vita - Red, or Vita - Slate unless the user explicitly asks for a multi-theme comparison.
- Prefer APEX terms in UI: Application, Page, Region, Interactive Grid, Interactive Report, Page Items, Dynamic Action, Process, Validation, Breadcrumb, Wizard.
- Use actual component names from the catalog when describing or generating UI.
- For data-heavy prototypes, use Interactive Grid, Interactive Report, Classic Report, Cards, Metric Card, and Region patterns before inventing generic dashboard cards.
- Keep density compact. Do not use oversized hero marketing sections except when the APEX Hero component is specifically requested.
- Preserve this theme's shell colors, surface colors, action colors, compact borders, compact controls, and report-oriented layout.

## Source Coverage

All 71 unique Design, Components, and Icons page paths were visited after switching to Vita - Red. Each visited page carried `apex-theme-vita-red` and resolved the primary token to `#da1b1b`. The later live component extraction pass revisited 59 unique Components pages in the same browser session and captured page anatomy, live demo selectors, Template Option families, top APEX/UT classes, and representative computed styles.

### Verified Page Paths

| Group | Required menu entry | Canonical path |
| --- | --- | --- |
| Design | Design Overview | `design-overview` |
| Design | Colors | `colors` |
| Design | Navigation | `navigation` |
| Design | Grid Layout | `grid-layout` |
| Design | Page Templates | `pages` |
| Design | Theme Styles | `theme-styles` |
| Design | Mobile Patterns / Navigation | `navigation2` |
| Design | Headers and Footers | `headers-and-footers` |
| Design | Data Entry | `data-entry2` |
| Design | Touch Gestures | `touch-gestures` |
| Design | jQuery Mobile Components | `jquery-mobile-components` |
| Components | Components | `components` |
| Components | Alert | `alert-region` |
| Components | Avatar | `avatar-component` |
| Components | Badge | `badge-component` |
| Components | Badge List | `badges-list` |
| Components | Breadcrumb | `breadcrumb` |
| Components | Buttons | `buttons` |
| Components | Button Group | `button-container-region` |
| Components | Button Container | `button-container` |
| Components | Calendar | `calendars` |
| Components | Card Regions | `card-regions` |
| Components | Card Templates | `card-templates` |
| Components | Carousel | `carousel-region` |
| Components | Charts | `charts` |
| Components | Collapsible | `collapsible-region` |
| Components | Comments Component | `comments-component` |
| Components | Comments Report | `comments-report` |
| Components | Content Block | `content-block` |
| Components | Content Row Component | `content-row-component` |
| Components | Content Row Report | `content-row-report` |
| Components | Contextual Info | `contextual-info` |
| Components | Classic Report / Data Tables and Reports | `standard-reports` |
| Components | Interactive Report | `interactive-report` |
| Components | Interactive Grid | `interactive-grid` |
| Components | Faceted Search | `reports-faceted-search` |
| Components | Smart Filters | `reports-smart-filters` |
| Components | Search Region | `reports-search-region` |
| Components | Reflow Report | `reflow-report` |
| Components | Column Toggle Report | `column-toggle-report` |
| Components | Dynamic Content Region | `dynamic-content-region` |
| Components | Flexbox Container | `flexbox-container-component` |
| Components | Forms | `form-item-types` |
| Components | Form Labels | `forms` |
| Components | Help Text | `help-text` |
| Components | Hero | `hero-region` |
| Components | Image | `region-image` |
| Components | Links List | `links-list` |
| Components | List View | `list-view` |
| Components | Map | `map` |
| Components | Media List Component | `media-list-component` |
| Components | Media List Report | `media-list` |
| Components | Menu Bar | `menu-bar-list` |
| Components | Menu Popup | `menu-popup` |
| Components | Metric Card | `metric-card` |
| Components | Modal Dialogs | `page-dialog` |
| Components | Page Dialog | `page-dialog` |
| Components | Page Drawer | `page-drawer` |
| Components | Inline Dialog | `inline-dialog` |
| Components | Inline Drawer | `inline-drawer` |
| Components | Inline Popup | `inline-popup` |
| Components | Navigation Bar | `navigation` |
| Components | Standard | `standard-region` |
| Components | Static Content | `static-content` |
| Components | Region Display Selector | `region-display-selector` |
| Components | Tabs Container | `tabs` |
| Components | Timeline Component | `timeline-component` |
| Components | Timeline Report | `timeline-reports` |
| Components | Title Bar | `title-bar-region` |
| Components | Tree | `tree` |
| Components | Value Attribute Pairs Report | `value-attr-pairs-report` |
| Components | Wizards / Wazards | `wizard-region` |
| Icons | Icons | `icons` |

