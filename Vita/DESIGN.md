---
name: "Design Overview"
description: "Design tokens extracted from https://oracleapex.com/ords/r/apex_pm/ut/design-overview"
colors:
  primary: "#056AC8"
  secondary: "#FFC628"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  text-1:
    fontFamily: "system-ui"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1
  text-2:
    fontFamily: "system-ui"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 2
  text-3:
    fontFamily: "system-ui"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.25
  text-4:
    fontFamily: "apex-core-font"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
  text-5:
    fontFamily: "system-ui"
    fontSize: "24.5px"
    fontWeight: 400
    lineHeight: 1.5
  text-6:
    fontFamily: "system-ui"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
  text-7:
    fontFamily: "apex-core-font"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1
  text-8:
    fontFamily: "system-ui"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.33
  text-9:
    fontFamily: "system-ui"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.2
  text-10:
    fontFamily: "system-ui"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
  text-11:
    fontFamily: "system-ui"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.4
  text-12:
    fontFamily: "system-ui"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.33
  text-13:
    fontFamily: "fcicons"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1
  text-14:
    fontFamily: "system-ui"
    fontSize: "16px"
    fontWeight: 400
  text-15:
    fontFamily: "system-ui"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
  text-16:
    fontFamily: "system-ui"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.25
  text-17:
    fontFamily: "apex-core-font"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
  text-18:
    fontFamily: "system-ui"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  text-19:
    fontFamily: "system-ui"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
  text-20:
    fontFamily: "system-ui"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.14
  text-21:
    fontFamily: "system-ui"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.23
  text-22:
    fontFamily: "system-ui"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.33
  text-23:
    fontFamily: "system-ui"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.33
  text-24:
    fontFamily: "ui-monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  text-25:
    fontFamily: "system-ui"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.27
  text-26:
    fontFamily: "system-ui"
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
    backgroundColor: "#F8F8F8"
    textColor: "#393939"
    rounded: "{rounded.sm}"
    padding: "7px 11px"
  input-observed:
    backgroundColor: "#F9F9F9"
    textColor: "#202020"
    rounded: "0px"
    padding: "7px"
coverage:
  source: "https://oracleapex.cn/ords/r/test/ut/design-overview"
  canonicalHost: "https://oracleapex.com/ords/r/apex_pm/ut"
  themeStyle: "Vita"
  themeStyleId: "2722798454316704879"
  standardComponents: 46
  designPages: 11
  componentAndIconPages: 60
  uniqueVitaPages: 71
  requiredMenuEntries: 73
  verifiedVitaPages: 71
  liveComponentPagesScraped: 59
  liveComponentPagesVitaVerified: 59
  liveComponentTemplateOptionPages: 31
  liveComponentEvidenceAt: "2026-06-10T18:08:40Z"
  capturedAt: "2026-06-10T10:33:53Z"
resources:
  readme: "README.md"
  manifest: "design-system.manifest.json"
  tokens: "tokens/vita.tokens.json"
  css: "styles/vita-open-design.css"
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
    bodyBackground: "#FFFFFF"
    contentBackground: "#FFFFFF"
    headerBackground: "#056AC8"
    sideNavigationBackground: "#056AC8"
    sideNavigationText: "#FFFFFF"
    focusColor: "#056AC8"
  button:
    backgroundColor: "#F8F8F8"
    hoverBackgroundColor: "#FFFFFF"
    textColor: "#393939"
    borderColor: "rgba(0,0,0,.075)"
    rounded: "2px"
    padding: "8px 12px"
    fontSize: "12px"
    lineHeight: "16px"
    shadow: "0 2px 4px -3px rgba(0,0,0,.1)"
  button-primary:
    backgroundColor: "#056AC8"
    textColor: "#FFFFFF"
    borderColor: "#056AC8"
  input:
    backgroundColor: "#F9F9F9"
    focusBackgroundColor: "#FFFFFF"
    textColor: "#202020"
    borderColor: "#DFDFDF"
    focusBorderColor: "#056AC8"
    rounded: "2px"
    padding: "4px"
  region:
    backgroundColor: "#FFFFFF"
    textColor: "#262626"
    borderColor: "rgba(0,0,0,.1)"
    rounded: "2px"
    shadow: "0 2px 4px -2px rgba(0,0,0,.1)"
    headerFontSize: "16px"
    headerFontWeight: 600
  card:
    backgroundColor: "#FFFFFF"
    borderColor: "rgba(0,0,0,.1)"
    rounded: "3px"
    shadow: "0 2px 4px -2px rgba(0,0,0,.075)"
    hoverShadow: "0 4px .5rem 0 rgba(0,0,0,.1)"
    iconBackground: "#056AC8"
  report:
    backgroundColor: "#FFFFFF"
    borderColor: "rgba(0,0,0,.1)"
    headerBackground: "#FFFFFF"
    cellBorderColor: "#E6E6E6"
    fontSize: "12px"
    cellHeight: "32px"
  badge:
    backgroundColor: "rgba(0,0,0,.1)"
    textColor: "#262626"
    rounded: "16px"
    fontSize: "12px"
  status:
    success: "#388729"
    warning: "#FBCE4A"
    danger: "#CB1100"
    info: "#056AC8"

---

# Oracle APEX Universal Theme - Vita Design System

## Overview

This DESIGN.md is scoped to the **Vita** theme style of Oracle APEX Universal Theme. It is intended for Open Design import so product managers and design agents can generate APEX-style application prototypes with source-backed Vita component patterns. Do not merge Iris, Redwood Light, Vita Dark, Vita Red, or Vita Slate into this file.

The source evidence was collected from the public Universal Theme application after switching the right-side **Theme Style** menu to **Vita**. Verification signals: 71 unique Design, Components, and Icons pages carried `apex-theme-vita`, the root primary token resolved to `#056ac8`, and spot checks reported `Vita (Current)`. Canonical component URLs remain on `oracleapex.com`; `oracleapex.cn` is cited as the fallback evidence host used for the live scrape.

## Theme Style

- Theme style: Vita
- Theme style id: `2722798454316704879`
- Capture source: https://oracleapex.cn/ords/r/test/ut/design-overview
- Canonical source family: https://oracleapex.com/ords/r/apex_pm/ut/...
- Unique Design, Components, and Icons pages verified: 71 / 71
- Required menu entries covered: 73 / 73, including repeated aliases such as Navigation / Navigation Bar and Modal Dialogs / Page Dialog
- Capture timestamp: 2026-06-10T10:33:53Z

## Companion Resources

Use these files with this `DESIGN.md` when Open Design or another prototyping tool needs more than prose guidance:

- `design-system.manifest.json`: machine-readable package manifest, canonical/fallback source URLs, official runtime asset references, and Open Design import hints.
- `README.md`: local package guide for using the Vita directory as a complete Open Design design-system package.
- `tokens/vita.tokens.json`: machine-readable Vita tokens for colors, typography, spacing, radius, shadows, sizes, and APEX class mappings.
- `styles/vita-open-design.css`: compact prototype CSS that maps Vita tokens to common APEX classes such as `t-Header`, `t-Body-nav`, `t-Region`, `t-Button`, `a-IRR-table`, `a-GV-table`, `t-Card`, and `t-Icon`.
- `reference/apex-reference.json`: machine-readable Reference layer covering APEX tools, utility classes, CSS variables, JavaScript events/APIs, and change-log boundaries.
- `reference/implementation-guidelines.md`: implementation guidance for using Reference pages in enterprise prototypes without inventing non-APEX CSS or runtime contracts.
- `patterns/page-templates.json`: Vita page shell, 12-column grid, page-template, Dialog, Drawer, and inline overlay guidance.
- `patterns/enterprise-patterns.json`: enterprise page blueprints for dashboards, report workspaces, editable grids, master-detail pages, transaction forms, approvals, and wizards.
- `patterns/component-state-matrix.json`: component variants and interaction states for buttons, forms, regions, reports, grids, filters, badges, overlays, timelines, and wizards.
- `patterns/README.md`: usage notes for the Vita-only enterprise pattern layer.
- `catalog/component-catalog.json`: machine-readable standard component catalog derived from the 46-component Vita extraction table.
- `catalog/navigation-icon-catalog.json`: navigation entries, navigation classes, Font APEX families, observed icon categories, and representative `fa-*` classes.
- `catalog/open-design-readiness.json`: readiness audit for the artifacts needed to generate enterprise Open Design prototypes.
- `catalog/README.md`: usage notes for the Vita-only machine-readable catalogs.
- `examples/enterprise-hr-dashboard.html`: an enterprise HR dashboard example showing shell, title region, cards, report, form, and timeline patterns using the local Vita CSS.

The manifest records the official Oracle APEX runtime CSS, JavaScript, and Font APEX resources. Do not vendor Oracle runtime assets into this repository; load them from an APEX runtime when exact fidelity is required.

## Reference Implementation Layer

The Vita package includes a Reference layer verified from the Universal Theme Reference navigation after switching the source app to Vita. The 11 verified pages cover Reference Overview, Migration Guide, Button Builder, Template Directives, Color and Status Modifiers, Layout Modifiers, Content Modifiers, CSS Variables, JavaScript Events, JavaScript APIs, and Change Log.

Use this layer when a generated prototype needs enterprise implementation discipline:

- Use APEX utility classes and CSS variables before adding one-off CSS.
- Use Button Builder semantics for report links, static content buttons, toolbar buttons, and icon buttons.
- Use color/status modifiers for semantic states instead of arbitrary colors.
- Use layout/content modifiers for spacing, alignment, responsive visibility, wrapping, heading treatment, and text density.
- Preserve Template Directives only when demonstrating APEX template logic; otherwise render the resulting user-facing state.
- Treat JavaScript Events and APIs as implementation notes for behavior, not visible product copy.
- Target Universal Theme 26.1 behavior unless a prompt explicitly asks for migration from an older theme.

## Enterprise Application Pattern Layer

The Vita package includes enterprise pattern resources verified from pages directly reachable from the Universal Theme `getting-started` application after switching Theme Style to Vita. These resources translate observed APEX page/component evidence into generation blueprints for Open Design:

- Page templates and layout: Standard, Left Side Column, Right Side Column, Both Side Column, Marquee Detail, Page Dialog, Page Drawer, Inline Dialog, Inline Drawer, and the 12-column responsive grid.
- Enterprise page blueprints: operations dashboard, Interactive Report workspace, Interactive Grid editing, master-detail management, transaction form, approval workflow, and guided wizard.
- Component states: button variants, form field states, collapsible regions, Interactive Report/Grid states, faceted/smart filters, badges, dialogs/drawers, timelines, and wizards.

Use these files when a generated prototype needs an enterprise application structure rather than a single isolated component. Keep the output Vita-only and continue to prefer APEX class semantics over unrelated web-framework primitives.

## Machine-Readable Catalog Layer

The `catalog/` files mirror the standard component table, navigation evidence, icon system, and readiness audit in a format that Open Design can consume without parsing Markdown. Use them for component selection, navigation/icon fidelity, and import completeness checks.

## Vita Coverage Model

Open Design should treat this file as the Vita-only extraction for the Universal Theme **Design**, **Components**, and **Icons** navigation groups. The canonical URL for every listed page is `https://oracleapex.com/ords/r/apex_pm/ut/<path>`; the fallback evidence host used for live verification was `https://oracleapex.cn/ords/r/test/ut/<path>`.

### Design Menu

- **Design Overview** (`design-overview`): establishes the Universal Theme design overview and source navigation shell.
- **Colors** (`colors`): defines Vita color use around `#056AC8` primary, `#FFC628` secondary attention, white surfaces, dense borders, and status colors.
- **Navigation** (`navigation`): covers application shell navigation, side navigation, navigation bar behavior, selected state, and breadcrumb/title placement.
- **Grid Layout** (`grid-layout`): uses the Universal Theme 12-column grid layout, responsive classes, visibility classes, and compact region alignment.
- **Page Templates** (`pages`): covers Standard, Left Side Column, Right Side Column, Both Side Column, Marquee Detail, Dialog, and other page-template layouts.
- **Theme Styles** (`theme-styles`): keeps Vita separate from Iris, Redwood Light, Vita Dark, Vita Red, and Vita Slate.
- **Mobile Patterns / Navigation** (`navigation2`), **Headers and Footers** (`headers-and-footers`), **Data Entry** (`data-entry2`), **Touch Gestures** (`touch-gestures`), and **jQuery Mobile Components** (`jquery-mobile-components`): apply the same Vita density and token defaults to mobile navigation, mobile data entry, gestures, headers, footers, and jQuery Mobile component patterns.

### Expanded Components And Icons

These menu entries are required in addition to the original 46 standard component pages. Names intentionally preserve Oracle APEX menu labels and common aliases so generators can match either the page title or the navigation item.

- **Badge List** (`badges-list`): same page family as Badges List; supports circular, stacked, grid, flexible box, span-horizontal, float-items, and theme-color variants.
- **Comments Component** (`comments-component`) and **Comments Report** (`comments-report`): use avatar, comment text, metadata, and status-update layouts for activity feeds.
- **Content Row Component** (`content-row-component`) and **Content Row Report** (`content-row-report`): use selection controls, icon or avatar slots, primary text, secondary text, and row actions.
- **Classic Report / Data Tables and Reports** (`standard-reports`), **Interactive Report** (`interactive-report`), **Interactive Grid** (`interactive-grid`), **Faceted Search** (`reports-faceted-search`), **Smart Filters** (`reports-smart-filters`), **Search Region** (`reports-search-region`), **Reflow Report** (`reflow-report`), and **Column Toggle Report** (`column-toggle-report`): keep report UIs dense, table-first, and filter/search controls close to the report they affect.
- **Dynamic Content Region** (`dynamic-content-region`): corresponds to PL/SQL Dynamic Content and should render generated HTML/text inside standard Vita region chrome.
- **Forms** (`form-item-types`) and **Form Labels** (`forms`): preserve page-item density, required/help states, label alignment, item pre/post text, and stretch item options.
- **Map** (`map`): render map regions as data regions with compact controls and Vita region framing; do not make map pages look like standalone consumer maps.
- **Media List Component** (`media-list-component`) and **Media List Report** (`media-list`): use icon/avatar media, heading, description, metadata, and badge/status slots.
- **Modal Dialogs** (`page-dialog`), **Page Dialog** (`page-dialog`), **Page Drawer** (`page-drawer`), **Inline Dialog** (`inline-dialog`), **Inline Drawer** (`inline-drawer`), and **Inline Popup** (`inline-popup`): preserve APEX dialog/drawer boundaries, compact headers, visible close affordances, and action button placement.
- **Tabs / Region Display Selector** (`region-display-selector`) and **Tabs Container** (`tabs`): use RDS for switching page regions and Tabs Container for tabbed region layout with simple or pill styling.
- **Timeline Component** (`timeline-component`) and **Timeline Report** (`timeline-reports`): use time-ordered activity rows with icon/avatar, title, metadata, and compact report-backed variants.
- **Value Attribute Pairs Report** (`value-attr-pairs-report`): use key-value report layouts with fixed or variable label widths, left or right aligned details, pagination behavior, and hidden-empty-value options.
- **Wizards / Wazards** (`wizard-region`): use Wizard Progress List, vertical orientation, clickable steps, and current-step label modes. `Wazards` is treated as a misspelling alias for Wizards in generation prompts.
- **Icons** (`icons`): use Font APEX classes such as `fa-*`, `a-Icon`, and `t-Icon`; use small/large icon sizing from the Universal Theme icon page and do not replace APEX icon semantics with emoji or unrelated SVG libraries.

## Vita Token Contract

Use these as the executable Vita defaults in Open Design prototypes.

### Color

- Primary action and focus: `#056AC8`
- Secondary attention: `#FFC628`
- Canvas and component surface: `#FFFFFF`
- Alternate surface: `#F8F8F8`
- Input surface: `#F9F9F9`
- Text: `#000000` for page-level text and `#262626` for component body text
- Muted text: `#666666`
- Border: `rgba(0,0,0,.1)` for regions and `#E6E6E6` for report cells
- Success: `#388729`
- Warning: `#FBCE4A`
- Danger: `#CB1100`

### Typography

Vita uses compact system UI typography. Use `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif for product UI. Observed sizes include 64px display text, 32px headings, 24px subheadings, 16px section headers, 14px body text, and 12px dense controls/reports. Reports, toolbar buttons, menu items, badges, and grid cells should usually render at 12px. Region titles use 16px at 600 weight.

### Shape, Spacing, And Depth

- Default button radius: `2px`
- Region radius: `2px`
- Card radius: `3px`
- Full badge radius: `16px` or pill
- Base layout rhythm: 8px, with 1-7px increments for dense APEX control padding
- Region shadow: `0 2px 4px -2px rgba(0,0,0,.1)`
- Button shadow: `0 2px 4px -3px rgba(0,0,0,.1)`
- Card hover shadow: `0 4px .5rem 0 rgba(0,0,0,.1)`

## Component Design Patterns

### Application Shell And Navigation

Vita screens should look like Oracle APEX workspaces: a compact header, left navigation, title/breadcrumb region, and dense content regions. The Universal Theme body uses white surfaces, blue as the selected/action color, and tight alignment. Navigation can use the primary blue more strongly than regions; report and form areas should remain white and bordered.

### Buttons

Observed neutral buttons use `#F8F8F8` background, `#393939` text, `rgba(0,0,0,.075)` border, 2px radius, 12px font, 16px line height, and roughly 8px vertical / 12px horizontal padding. Primary buttons use `#056AC8` with white text. Preserve the APEX button vocabulary: Normal, Primary, Warning, Danger, Success, Simple, Remove UI Decoration, Display as Link, Tiny, Small, Large, Stretch.

### Forms

Inputs use `#F9F9F9` background, `#202020` text, `#DFDFDF` 1px border, 2px radius, and compact 4px internal padding. Focus changes background to white and border to `#056AC8`. Forms should expose labels, help text, validation, required state, and compact page-item layouts rather than oversized SaaS controls.

### Regions

Regions are the main composition primitive. Use white background, `rgba(0,0,0,.1)` border, 2px radius, and a small shadow. Region title bars use 16px / 600 text. Template Options frequently include header visibility, heading level, body padding, maximize button, body height, icon display, and collapsibility.

### Reports, Interactive Reports, And Interactive Grids

Reports are dense. Use white grid backgrounds, 12px font, 32px grid cell height, `#E6E6E6` cell borders, compact toolbar rows, and visible column headers. Interactive Grid and Interactive Report both expose Template Options for Remove Borders, Show Maximize Button, Header visibility, Heading Level, item spacing, item size, stretch form fields, and label alignment.

### Cards And Metrics

Cards use white surfaces, 1px `rgba(0,0,0,.1)` borders, 3px radius, 1rem padding, and subtle shadows. Card icons and initials use Vita primary blue with white foreground. Metric Cards should place one emphasized value near a short label and supporting metadata; keep the surface compact and data-first.

### Lists, Menus, Tabs, Wizards

List and navigation components should remain utilitarian. Links List supports badges, right arrows, icon display, and action styling. Tabs Container supports remembered active tab, icon placement, fill labels, simple/pill style, and small/large sizes. Wizard supports vertical orientation, clickable steps, and label display modes.

### Feedback And Status

- **Alert** (Region): Display alerts, confirmations, and other action-oriented messages. Template Options: Highlight Background, Alert Display, Horizontal, Wizard, Alert Icons, Hide Icons, Show Default Icons, Show Custom Icons, Alert Type, Warning, Danger, Information, Success, Alert Title.
- **Badge** (Partial): Display content within a badge. Template Options: No page-level Template Options captured; use component default.
- **Badges List** (List): Display badges or counters. Template Options: Apply Theme Colors, Style, Circular, Grid, Layout, Stacked, 2 Column Grid, 3 Column Grid, 4 Column Grid, 5 Column Grid, Span Horizontally, Float Items, Flexible Box, Badge Size.
- **Comments** (Region): Display user comments and status updates. Template Options: No page-level Template Options captured; use component default.

### Identity And Navigation

- **Avatar** (Partial): Display an icon, image, or initials. Template Options: No page-level Template Options captured; use component default.
- **Breadcrumb** (Region): Indicate where the user is within the application with a hierarchical list of links. Template Options: No page-level Template Options captured; use component default.
- **Navigation Bar** (List): Determine how users navigate within an application. Template Options: No page-level Template Options captured; use component default.
- **Menu Bar** (List): Display a menu bar control. Template Options: Behave Like Tabs, Show Sub Menu Icons, Add Actions, Display Menu Callout.
- **Menu Popup** (List): Display a menu that pops up on a page by using Lists and associating a button with the menu. Template Options: No page-level Template Options captured; use component default.
- **Links List** (List): Use a list of links for navigation and other action-oriented tasks, with the option to show badges, icons, sub-list items, and more. Template Options: Show Badges, Show Right Arrow, Disable Text Wrapping, Style, Default, Actions, Display Icons, No Icons, For Top Level Items Only, For All Items.
- **Tree** (Region): Perform hierarchical navigation control based on a SQL query. Template Options: No page-level Template Options captured; use component default.
- **Title Bar** (Region): Group breadcrumbs, page title, and primary page actions at the top of the page. Template Options: Show Breadcrumbs, Use Compact Style, Region Title, Use Current Breadcrumb Entry, Use Region Title, Heading Font, Default, Alternative, Heading Level, H1, H2, H3, H4, H5.

### Buttons And Forms

- **Button** (Button): Display text, icon or both within a button. Template Options: Size, Default, Tiny, Small, Large, Type, Normal, Primary, Warning, Danger, Success, Style, Simple, Remove UI Decoration.
- **Button Container** (Region): Organize buttons, toolbars, and simple horizontal forms. Template Options: Stick to Bottom for Mobile, Body Padding, Default, No Padding, Slim Padding, Style, Borderless, Remove UI Decoration, Heading Level, H1, H2, H3, H4, H5.
- **Button Group** (Button): Group buttons to appear together to make a single control. Template Options: Radio Group, Option A, Option B, Option C, Radio Button Group.
- **Form Field** (Form): Position form field such as inputs, select lists and more on a page. Template Options: Text Field, Hide Password Visibility, Stretch Form Item, Size, Default, Large, X Large, Item Pre Text, Display as Block, Item Post Text, Top Margin, None, Small, Medium.

### Regions And Layout

- **Standard** (Region): Display widgets in a generic region template that can be heavily customized. Template Options: Remove Body Padding, Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Visible - Default, Hidden, Hidden but accessible, Accent.
- **Static Content** (Region): Use HTML markup directly on the page. Template Options: No page-level Template Options captured; use component default.
- **Content Block** (Region): Display region content in a simple block. Template Options: Add Body Padding, Show Region Icon, Region Title, Large, Medium, Small, Header, Visible - Default, Hidden, Hidden but accessible, Body Style, Default, Shadow Background, Light Background.
- **Flexbox Container** (Region): Suitable for arranging components in a flexible layout. Template Options: No page-level Template Options captured; use component default.
- **Collapsible** (Region): Toggle the visibility of a region's content on the page. Template Options: Remove Body Padding, Remember Collapsible State, Collapsible Icon Position, Start, End, Collapsible Button Icons, Arrows, Plus or Minus, Default State, Expanded, Collapsed, Body Height, Auto - Default, 240px.
- **Region Display Selector** (Region): Show and hide controls for regions. Template Options: No page-level Template Options captured; use component default.
- **Tabs Container** (Region, List): Improve navigation, flow, and usability of pages in an application. Template Options: Remember Active Tab, Tabs Icon, None - Default, Above Label, Inline with Label, Layout, Default, Fill Tab Labels, Tabs Style, Simple, Pill, Tabs Size, Small, Large.
- **Wizard** (Region, List, Page): Contain the Wizard Progress List and forms using this region template. Template Options: Vertical Orientation, Make Wizard Steps Clickable, Label Display, All Steps, Current Step Only, Hide Labels.
- **Inline Dialog** (Region): Display a region on the current page within a modal dialog. Template Options: No page-level Template Options captured; use component default.

### Cards And Content

- **Card Regions** (Region): Present a variety of information in small blocks and can be heavily customized. Template Options: No page-level Template Options captured; use component default.
- **Card Templates** (Report, List): Style regions like Classic Reports or Lists to look like a Cards region. Template Options: Apply Theme Colors, Display Subtitle, Style, Basic, Compact, Featured, Block, Icons, No Icons, Display Icons, Display Initials, Layout, Stacked, 2 Columns.
- **Content Row** (Region): Display content using a column for selection, such as a checkbox or radio button, an icon, and actions. Template Options: No page-level Template Options captured; use component default.
- **Media List** (Region): Design lists that involve an icon, heading, description, and a badge. Template Options: Order By.
- **List View** (List): Display a simple list-based user interface that has a wide range of features such as built in search, list dividers, nested lists, and more. Template Options: No page-level Template Options captured; use component default.
- **Metric Card** (Region): Used to display a single key value alongside a label and supporting details. Template Options: No page-level Template Options captured; use component default.
- **Hero** (Region): Capture attention and display an icon, heading, sub-headings, and buttons on a homepage, dashboard, and other introductory-style pages. Template Options: Remove Body Padding, Style, Default, Featured, Stacked Featured, Display Icon, Yes (Default), No, Icon Shape, Rounded Corners, Circle, Square, Heading Font, Alternative.
- **Image** (Region): Display a single image without text in a region. Template Options: Image Stretch, Ratio, Auto, 1:1 (Square), 16:9 (Widescreen), 4:3 (Standard), 2:1 (Univisium), Scale, Contain, Cover, Fill, Scale Down, Shape, Square.
- **Timeline** (Region): Display recent updates and interactions within an application. Template Options: No page-level Template Options captured; use component default.

### Reports And Data

- **Classic Report** (Report): Display tabular data in a default report template. Template Options: Stretch Report, Alternating Rows, Enable, Disable, Row Highlighting, Report Border, Default, Horizontal Only, Vertical Only, No Borders, No Outer Borders, Pagination Display, Hide when all rows displayed.
- **Column Toggle Report** (Report): Quickly choose columns to display when screen size is limited. Template Options: Task Name, Start Date, End Date, Status, Assigned To, Cost, Budget.
- **Contextual Info** (Report): Display key-value pairs in a report. Template Options: Hide Empty Values, Display Items, Inline (Default), Stacked, Display Labels, Pagination Display, Default, Hide when all rows displayed.
- **Interactive Grid** (Report): Customize reports using powerful features in this native APEX component. Template Options: Remove Borders, Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Default, H1, H2, H3, H4, H5, H6, Item Spacing.
- **Interactive Report** (Report): Create powerful reports using fixed headers, frozen columns, scroll pagination, multiple filters, sorting, aggregates, computations, and more. Template Options: Remove Borders, Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Default, H1, H2, H3, H4, H5, H6, Item Spacing.
- **Reflow Report** (Report): Display data vertically to save space when screen size becomes small. Template Options: Add Body Padding, Show Region Icon, Region Title, Large, Medium, Small, Header, Visible - Default, Hidden, Hidden but accessible, Body Style, Default, Shadow Background, Light Background.
- **Value Attribute Pairs** (Report): Display attribute value / key value pairs with Row or Column based queries. Template Options: Label Width, Default, Fixed - Small, Fixed - Medium, Fixed - Large, Variable - Small, Variable - Medium, Variable - Large, Layout, Left Aligned Details, Right Aligned Details, Pagination Display, Hide when all rows displayed, Hide Empty Values.
- **Calendar** (Region): Display a calendar based on the Full Calendar library that supports drag and drop, multiple views, and more. Template Options: No page-level Template Options captured; use component default.
- **Charts** (Region): Visualize data in a variety of different ways based on Oracle JavaScript Extension Toolkit (JET) Data Visualizations. Template Options: No page-level Template Options captured; use component default.
- **PL/SQL Dynamic Content** (Region): Render HTML or text using the PL/SQL Web Toolkit. Template Options: No page-level Template Options captured; use component default.

## Live Vita Component Extraction Pass

A follow-up Playwright extraction pass visited the 59 unique Components pages listed below on the `oracleapex.cn` fallback host after switching the session to **Vita**. Every visited component page carried `apex-theme-vita` and resolved the root primary token to `#056ac8`; no component page failed to load. Canonical links remain `https://oracleapex.com/ords/r/apex_pm/ut/<path>`.

This pass specifically inspected the Universal Theme component-page anatomy the sample application exposes: the page title and breadcrumb, an Overview block, one or more Demo blocks with live components, and the Template Options configuration region when the page exposes one. The Template Options controls were not exhaustively toggled, but their option families and visible preview targets were captured so Open Design can generate variants that remain faithful to APEX.

### Measured Vita Defaults From Live Components

- **Page anatomy**: component pages use compact title/breadcrumb chrome followed by section tabs for Overview, Instructions, Demo, and Template Options. Preserve this structure when recreating APEX documentation or component-demo pages.
- **Template Options panels**: options appear as compact `t-Region` accordions, often `379px` wide in the right-side configuration area. Region headers measure about `48px` high with 16px / 600 title text; option controls use 14px text and dense 28px rows.
- **Buttons**: neutral `t-Button` controls are 32px high with `#F8F8F8` background, `#393939` text, `rgba(0,0,0,.075)` border, 2px radius, 12px type, 16px line height, and `0 2px 4px -3px rgba(0,0,0,.1)` shadow. Hot buttons use `#056AC8`, white text, and 700 weight.
- **Forms**: text inputs use `#F9F9F9` background, `#202020` text, `#DFDFDF` border, 2px radius, and compact 14px type. Floating-label fields can be 48px high with label space inside the control; do not render them as oversized standalone SaaS inputs.
- **Regions**: standard component frames use white backgrounds, `rgba(0,0,0,.1)` 1px borders, 2px radius, 16px / 600 headers, and small shadows. Template Options commonly change body padding, header visibility, icon visibility, height, collapsibility, and maximize affordances.
- **Reports and grids**: Interactive Grid uses white `a-IG` / `a-GV` surfaces with `rgba(0,0,0,.1)` borders. Data cells use 12px text, 16px line height, 32px row height, 4px/8px cell padding, and `#E6E6E6` grid separators. Interactive Report uses the same dense toolbar/header model with pagination directly attached.
- **Status components**: Alert regions use white surfaces, 1px soft borders, 4px radius, and small shadows, with option-driven icon/type variants. Badges are compact inline-flex pills or rounded rectangles, commonly 24px high with 4px/8px padding and semantic warning/success/info/danger colors.
- **Identity and activity**: large avatars can render as 96px square/circle blocks, and activity components combine avatar, title/body, metadata, badge/status, and compact actions. Preserve these slots instead of flattening activity lists into plain text.
- **Cards and metrics**: Cards, CardView, Metric Card, Media List, Content Row, and Timeline share small white surfaces, tight spacing, icon/avatar slots, badge slots, and data-first text hierarchy. Metric Card examples are roughly 200px by 146px with 16px padding.
- **Navigation components**: Breadcrumb, Links List, Menu Bar, Navigation Bar, Tree, Tabs, Title Bar, and Wizard are application-navigation widgets. Keep dense rows, icons, current-state affordances, and APEX-specific right-arrow/badge/step variants.

### Core Component Extraction Matrix

| Component page | Live selectors and classes | Template Option families observed | Reproduction rule |
| --- | --- | --- | --- |
| Alert (`alert-region`) | selectors: `alert`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Highlight Background, Alert Display, Horizontal, Wizard, Alert Icons, Hide Icons, Show Default Icons, Show Custom Icons, Alert Type, Warning | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Avatar (`avatar-component`) | selectors: `avatar`; top classes: `t-Avatars-item, t-Avatar, t-Avatar--image, t-Avatar--lg` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Badge (`badge-component`) | selectors: `badge, interactiveReport, gridHeaderCell, gridCell, pagination`; top classes: `t-Badge, t-Badge-value, t-Badge--success, t-Badge--info` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Badge List (`badges-list`) | selectors: `contentBlock/text structure`; top classes: `t-BadgeList-item, t-BadgeList-wrap, t-BadgeList-label, t-BadgeList-value` | Apply Theme Colors, Style, Circular, Grid, Layout, Stacked, 2 Column Grid, 3 Column Grid, 4 Column Grid, 5 Column Grid | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Breadcrumb (`breadcrumb`) | selectors: `breadcrumb, titleBar`; top classes: `t-ContentBlock-headerItems, apex-col-auto, t-Breadcrumb-item, t-Breadcrumb-label` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| Buttons (`buttons`) | selectors: `primaryButton`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Size, Tiny, Small, Large, Type, Normal, Primary, Warning, Danger, Success | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Button Group (`button-container-region`) | selectors: `button, formField`; top classes: `t-Icon, t-Button, t-ContentBlock-headerItems, t-Button--noLabel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Button Container (`button-container`) | selectors: `primaryButton, toolbar`; top classes: `t-Icon, t-ButtonRegion-col, t-ButtonRegion-buttons, t-Button` | Stick to Bottom for Mobile, Body Padding, No Padding, Slim Padding, Style, Borderless, Heading Level, Item Spacing, Standard, Slim | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Calendar (`calendars`) | selectors: `calendar`; top classes: `fc-day, fc-scrollgrid-sync-inner, fc-daygrid-day, fc-daygrid-day-frame` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Card Regions (`card-regions`) | selectors: `cardList, pagination`; top classes: `a-CardView-item, a-CardView, a-CardView-header, a-CardView-iconWrap` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Card Templates (`card-templates`) | selectors: `card, cardList, pagination`; top classes: `apex-item-option, t-ContentBlock-headerItems, t-Icon, t-Form-fieldContainer` | Apply Theme Colors, Display Subtitle, Style, Basic, Compact, Featured, Block, Icons, No Icons, Display Icons | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Carousel (`carousel-region`) | selectors: `tabs`; top classes: `a-Icon, a-Tabs-after, a-Region-carouselItem, a-Tabs-panel` | Show Next and Previous Buttons, Show Maximize Button, Show Region Icon, Timer, No Timer, 5 Seconds, 10 Seconds, 15 Seconds, 20 Seconds, Body Height | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Charts (`charts`) | selectors: `chart`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Collapsible (`collapsible-region`) | selectors: `button, region, regionHeader, regionBody, formField`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Collapsible Icon Position, Start, End, Collapsible Button Icons, Arrows, Plus or Minus, Default State, is-expanded, Expanded, is-collapsed | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Comments Component (`comments-component`) | selectors: `avatar, comment`; top classes: `t-Comments-item, t-Comments-icon, t-Avatar, t-Avatar--initials` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Comments Report (`comments-report`) | selectors: `comment, pagination`; top classes: `t-ContentBlock-headerItems, t-AVPList-label, t-AVPList-value, apex-item-option` | Comments Style, Basic, Speech Bubbles, Icon Shape, Circle, Square, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Content Block (`content-block`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Add Body Padding, Show Region Icon, Large, Medium, Small, Header, Hidden, Hidden but accessible, Body Style, Shadow Background | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Content Row Component (`content-row-component`) | selectors: `primaryButton, avatar, contentRow`; top classes: `t-Icon, t-Button, t-Button--icon, t-Button--noLabel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Content Row Report (`content-row-report`) | selectors: `contentRow, pagination`; top classes: `t-Icon, t-Button, t-ContentRow-item, t-ContentRow-wrap` | Style, Compact, Content Alignment, Center (Default), Top, Stack on Mobile, Stack, Pagination Display, Hide when all rows displayed, Selection | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Contextual Info (`contextual-info`) | selectors: `pagination`; top classes: `t-ContentBlock-headerItems, t-ContextualInfo-item, t-ContextualInfo-label, t-ContextualInfo-value` | Hide Empty Values, Display Items, Inline (Default), Stacked, Display Labels, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Classic Report / Data Tables and Reports (`standard-reports`) | selectors: `classicReport, gridCell, pagination`; top classes: `t-Report-cell, t-Report-colHead, a-Report-SortHeading-Anchor--event, t-ContentBlock-headerItems` | Stretch Report, Alternating Rows, Enable, Disable, Horizontal Only, Vertical Only, No Borders, No Outer Borders, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Interactive Report (`interactive-report`) | selectors: `interactiveReport, gridHeaderCell, gridCell, pagination`; top classes: `a-Button, a-IRR-button, a-Icon, a-IRR-header` | Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Item Spacing, Standard, Slim, None, Item Size | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Interactive Grid (`interactive-grid`) | selectors: `select, interactiveGrid, gridHeaderCell, gridCell, toolbar, pagination`; top classes: `a-GV-cell, a-Icon, a-Button, a-GV-row` | Show Maximize Button, Header, Hidden but accessible, Hidden, Heading Level, Item Spacing, Standard, Slim, None, Item Size | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Faceted Search (`reports-faceted-search`) | selectors: `textInput, classicReport, gridCell, toolbar, pagination`; top classes: `t-Report-cell, apex-item-option, apex-item-option-badge, a-Icon` | Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Hidden | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Smart Filters (`reports-smart-filters`) | selectors: `textInput, classicReport, gridCell, pagination`; top classes: `t-Report-cell, apex-item-option, apex-item-option-badge, t-Report-colHead` | Heading Level, Item Spacing, Standard, Slim, None, Item Size, Large, X Large, Item Width, Stretch Form Fields | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Search Region (`reports-search-region`) | selectors: `textInput`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Apply Theme Colors, Boxed, Flat, Icon Size, Initial, Small, Medium, Large, Heading Level, Item Spacing | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Reflow Report (`reflow-report`) | selectors: `button, region, regionHeader, regionBody, formField`; top classes: `a-Table-cellLabel, apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel` | Add Body Padding, Show Region Icon, Large, Medium, Small, Header, Hidden, Hidden but accessible, Body Style, Shadow Background | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Column Toggle Report (`column-toggle-report`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Dynamic Content Region (`dynamic-content-region`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Flexbox Container (`flexbox-container-component`) | selectors: `region, regionHeader, regionBody`; top classes: `t-Region-headerItems, t-Region-buttons, t-Region-buttons-left, t-Region-buttons-right` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Forms (`form-item-types`) | selectors: `textInput, select, toolbar, map`; top classes: `apex-item-option, t-Form-fieldContainer, apex-item-wrapper, t-Form-labelContainer` | Heading Level, Item Spacing, Standard, Slim, None, Item Size, Large, X Large, Item Width, Stretch Form Fields | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Form Labels (`forms`) | selectors: `textInput`; top classes: `apex-item-option, t-Form-fieldContainer, apex-item-wrapper, t-Form-labelContainer` | Hide Password Visibility, Stretch Form Item, Size, Large, X Large, Item Pre Text, Display as Block, Item Post Text, Top Margin, margin-top-none | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Help Text (`help-text`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, a-Tabs-panel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Hero (`hero-region`) | selectors: `hero`; top classes: `t-HeroRegion-col, t-ContentBlock-headerItems, t-Icon, t-ContentBlock-header` | Style, Featured, Stacked Featured, Display Icon, No, Icon Shape, Circle, Square, Heading Font, Alternative | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Image (`region-image`) | selectors: `image`; top classes: `t-ContentBlock-headerItems, t-ContentBlock-header, t-ContentBlock-headerItems--title, t-ContentBlock-headerIcon` | Image Stretch, Auto, 1:1 (Square), 16:9 (Widescreen), 4:3 (Standard), 2:1 (Univisium), Scale, Contain, Cover, Fill | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Links List (`links-list`) | selectors: `linksList, pagination`; top classes: `t-Icon, t-ContentBlock-headerItems, t-LinksList-item, t-LinksList-link` | Show Badges, Show Right Arrow, Disable Text Wrapping, Style, Actions, Display Icons, No Icons, For Top Level Items Only, For All Items | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| List View (`list-view`) | selectors: `region, regionHeader, regionBody`; top classes: `a-ListView-item, t-ContentBlock-headerItems, apex-col-auto, t-Icon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Map (`map`) | selectors: `map`; top classes: `t-Region-headerItems, t-ContentBlock-headerItems, a-Icon, t-Region-buttons` | No page-level Template Options observed; preserve the component default and its documented attributes. | Keep the native component frame and APEX density; use Template Options for ratio, icon, size, or featured state without replacing it with a generic hero/card. |
| Media List Component (`media-list-component`) | selectors: `select, badge, avatar, mediaList`; top classes: `t-MediaList--showIcons, t-MediaList-item, t-MediaList-itemWrap, t-MediaList-itemWrap--showDesc` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Media List Report (`media-list`) | selectors: `mediaList, pagination`; top classes: `t-ContentBlock-headerItems, apex-item-option, t-Icon, t-Form-fieldContainer` | Show Icons, Show Description, Show Badges, Apply Theme Colors, Size, Large, Layout, 2 Column Grid, 3 Column Grid, 4 Column Grid | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Menu Bar (`menu-bar-list`) | selectors: `pagination, menuBar`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, t-ContentBlock-header` | Behave Like Tabs, Show Sub Menu Icons, Add Actions, Display Menu Callout | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| Menu Popup (`menu-popup`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Icon, t-ContentBlock, t-ContentBlock--h2` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Metric Card (`metric-card`) | selectors: `badge, avatar, metric`; top classes: `t-MetricCards-item, t-MetricCard, t-MetricCard-body, t-MetricCard-avatar` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Modal Dialogs (`page-dialog`) | selectors: `button`; top classes: `t-Button, t-Button-label, t-ContentBlock-headerItems, t-Button--gapLeft` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Page Drawer (`page-drawer`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Inline Dialog (`inline-dialog`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Inline Drawer (`inline-drawer`) | selectors: `button`; top classes: `t-ContentBlock-headerItems, t-Button, t-Button-label, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Inline Popup (`inline-popup`) | selectors: `button`; top classes: `t-Button, t-Button-label, t-ContentBlock-headerItems, t-Button--gapLeft` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Navigation Bar (`navigation`) | selectors: `button`; top classes: `t-Icon, t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock-header` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| Standard (`standard-region`) | selectors: `region, regionHeader, regionBody`; top classes: `t-ContentBlock-headerItems, t-Icon, t-Region-headerItems, t-Region-buttons` | Show Maximize Button, Show Region Icon, Body Height, Auto - Default, 240px, 320px, 480px, 640px, Header, Hidden | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Static Content (`static-content`) | selectors: `contentBlock/text structure`; top classes: `t-ContentBlock-headerItems, t-ContentBlock, t-ContentBlock--h2, a-Tabs-panel` | No page-level Template Options observed; preserve the component default and its documented attributes. | Reproduce the observed APEX component frame, spacing, and role semantics before adding custom presentation. |
| Region Display Selector (`region-display-selector`) | selectors: `region, regionHeader, regionBody`; top classes: `t-Region-headerItems, t-Region-buttons, t-Region-buttons-left, t-Region-buttons-right` | No page-level Template Options observed; preserve the component default and its documented attributes. | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Tabs Container (`tabs`) | selectors: `tabs`; top classes: `apex-item-option, t-Form-fieldContainer, t-Form-fieldContainer--floatingLabel, apex-item-wrapper` | Tabs Icon, Above Label, Inline with Label, Layout, Fill Tab Labels, Tabs Style, Simple, Pill, Tabs Size, Small | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |
| Timeline Component (`timeline-component`) | selectors: `badge, avatar`; top classes: `t-Timeline-item, t-Timeline-wrap, t-Timeline-user, t-Avatar` | No page-level Template Options observed; preserve the component default and its documented attributes. | Use the observed list/card slots: icon or avatar, title/value, secondary text, badge/status, and compact row actions without marketing-card spacing. |
| Timeline Report (`timeline-reports`) | selectors: `pagination`; top classes: `t-Icon, t-Timeline-item, t-Timeline-wrap, t-Timeline-user` | Style, Compact, Pagination Display, Hide when all rows displayed | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Title Bar (`title-bar-region`) | selectors: `breadcrumb, titleBar`; top classes: `t-ContentBlock-headerItems, t-BreadcrumbRegion-buttons, t-ContentBlock-header, t-ContentBlock-headerItems--title` | Show Breadcrumbs, Use Compact Style, Use Current Breadcrumb Entry, Use Region Title, Heading Font, Alternative, Heading Level, Item Spacing, Standard, Slim | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| Tree (`tree`) | selectors: `tree`; top classes: `a-TreeView-node, a-TreeView-row, a-TreeView-content, a-Icon` | No page-level Template Options observed; preserve the component default and its documented attributes. | Treat as application navigation, not site marketing navigation: dense rows, icons where supplied, right arrows/badges when enabled, and clear current/active state. |
| Value Attribute Pairs Report (`value-attr-pairs-report`) | selectors: `pagination`; top classes: `t-ContentBlock-headerItems, apex-item-option, t-ContentBlock, t-ContentBlock-header` | Label Width, Fixed - Small, Fixed - Medium, Fixed - Large, Variable - Small, Variable - Medium, Variable - Large, Layout, Left Aligned Details, Pagination Display | Keep the report/table first: compact toolbar, visible headers, 12px grid text where table data is present, 32px data rows, and pagination close to the table. |
| Wizards / Wazards (`wizard-region`) | selectors: `primaryButton, wizard`; top classes: `t-WizardSteps-step, t-WizardSteps-wrap, t-WizardSteps-marker, t-WizardSteps-label` | Vertical Orientation, Make Wizard Steps Clickable, Label Display, All Steps, Current Step Only, Hide Labels | Preserve APEX region mechanics: white surface, small borders/shadows, 48px region headers, compact controls, and Template Options that visibly alter padding, headers, icons, and layout. |

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

- Generate Vita-only Oracle APEX screens. Do not combine this file with Iris or Redwood Light unless the user explicitly asks for a multi-theme comparison.
- Prefer APEX terms in UI: Application, Page, Region, Interactive Grid, Interactive Report, Page Items, Dynamic Action, Process, Validation, Breadcrumb, Wizard.
- Use actual component names from the catalog when describing or generating UI.
- For data-heavy prototypes, use Interactive Grid, Interactive Report, Classic Report, Cards, Metric Card, and Region patterns before inventing generic dashboard cards.
- Keep density compact. Do not use oversized hero marketing sections except when the APEX Hero component is specifically requested.
- Preserve white surfaces, blue primary actions, tight borders, compact controls, and report-oriented layout.
- Use yellow sparingly for attention/warning states, not as a dominant theme color.

## Source Coverage

All 71 unique Design, Components, and Icons page paths were visited after switching to Vita. Each visited page carried `apex-theme-vita` and resolved the primary token to `#056ac8`. The local Playwright evidence also verified that the final Icons page and sampled Design/Component pages remained in the same Vita theme context.

The later live component extraction pass revisited 59 unique Components pages in the same Vita browser session and captured page anatomy, live demo selectors, Template Option families, top APEX/UT classes, and representative computed styles. That pass is summarized in the Live Vita Component Extraction Pass section above and is intended to guide higher-fidelity Open Design prototype generation.

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
