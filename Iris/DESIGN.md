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
coverage:
  source: "https://oracleapex.cn/ords/r/test/ut/design-overview"
  canonicalHost: "https://oracleapex.com/ords/r/apex_pm/ut"
  themeStyle: "Iris"
  themeStyleId: "2243014446517417"
  themeClass: "apex-theme-iris"
  liveRootPrimary: "#00688c"
  standardComponents: 46
  designPages: 11
  componentAndIconPages: 60
  uniqueIrisPages: 71
  requiredMenuEntries: 73
  httpVerifiedIrisPages: 71
  httpVerification: "71/71 oracleapex.cn paths returned HTTP 200 with apex-theme-iris body class"
  capturedAt: "2026-06-10T15:35:56+08:00"
componentPatterns:
  shell:
    bodyBackground: "#FFFFFF"
    contentBackground: "#FFFFFF"
    headerBackground: "#00688c"
    sideNavigationBackground: "#00688c"
    sideNavigationText: "#FFFFFF"
    focusColor: "#00688c"
  button:
    backgroundColor: "#FFFFFF"
    hoverBackgroundColor: "#FFFFFF"
    textColor: "#161513"
    borderColor: "rgba(0,0,0,.075)"
    rounded: "4px"
    padding: "7px 11px"
    fontSize: "12px"
    lineHeight: "16px"
    shadow: "0 2px 4px -3px rgba(0,0,0,.1)"
  button-primary:
    backgroundColor: "#00688c"
    textColor: "#FFFFFF"
    borderColor: "#00688c"
  input:
    backgroundColor: "#FFFFFF"
    focusBackgroundColor: "#FFFFFF"
    textColor: "#161513"
    borderColor: "rgba(0,0,0,.2)"
    focusBorderColor: "#00688c"
    rounded: "0px"
    padding: "4px 2px"
  region:
    backgroundColor: "#FFFFFF"
    textColor: "#161513"
    borderColor: "rgba(0,0,0,.1)"
    rounded: "2px"
    shadow: "0 2px 4px -2px rgba(0,0,0,.1)"
    headerFontSize: "16px"
    headerFontWeight: 600
  card:
    backgroundColor: "#FFFFFF"
    borderColor: "rgba(0,0,0,.1)"
    rounded: "3px"
    shadow: "0 2px 4px -2px rgba(0,0,0,.1)"
    hoverShadow: "0 4px .5rem 0 rgba(0,0,0,.1)"
    iconBackground: "#00688c"
  report:
    backgroundColor: "#FFFFFF"
    borderColor: "rgba(0,0,0,.1)"
    headerBackground: "#FFFFFF"
    cellBorderColor: "#E6E6E6"
    fontSize: "12px"
    cellHeight: "32px"
  badge:
    backgroundColor: "rgba(0,0,0,.1)"
    textColor: "#161513"
    rounded: "16px"
    fontSize: "12px"
  status:
    success: "#388729"
    warning: "#FBCE4A"
    danger: "#CB1100"
    info: "#00688c"

---

# Oracle APEX Universal Theme - Iris Design System

## Overview

This DESIGN.md is scoped to the **Iris** theme style of Oracle APEX Universal Theme. It is intended for Open Design import so product managers and design agents can generate APEX-style application prototypes with source-backed Iris component patterns. Do not merge Iris, Redwood Light, Vita, Vita Dark, Vita Red, or Vita Slate into this file.

The source evidence is the public Universal Theme application at the Design, Components, and Icons navigation groups. The initial extraction supplied the Iris token front matter and 48-page component baseline; this revision expands the document to the full 71 unique page paths / 73 required menu entries reflected by the current Universal Theme menu. Live verification on 2026-06-10 confirmed theme style id `2243014446517417`, body class `apex-theme-iris`, and root primary token `#00688c` after switching the right-side **Theme Style** menu on `oracleapex.cn`. Canonical component URLs remain on `oracleapex.com`; `oracleapex.cn` is cited as the fallback evidence host used for live theme switching and timeout recovery.

## Theme Style

- Theme style: Iris
- Theme style id: `2243014446517417`
- Theme class: `apex-theme-iris`
- Live root primary token: `#00688c`
- Capture source: https://oracleapex.cn/ords/r/test/ut/design-overview
- Canonical source family: https://oracleapex.com/ords/r/apex_pm/ut/...
- Unique Design, Components, and Icons pages covered: 71 / 71
- Required menu entries covered: 73 / 73, including repeated aliases such as Navigation / Navigation Bar and Modal Dialogs / Page Dialog
- Capture timestamp: 2026-06-10T15:35:56+08:00

## Iris Coverage Model

Open Design should treat this file as the Iris-only extraction for the Universal Theme **Design**, **Components**, and **Icons** navigation groups. The canonical URL for every listed page is `https://oracleapex.com/ords/r/apex_pm/ut/<path>`; the fallback evidence host used for live verification was `https://oracleapex.cn/ords/r/test/ut/<path>`.

### Design Menu

- **Design Overview** (`design-overview`): canonical Universal Theme Design menu page for design overview evidence.
- **Colors** (`colors`): canonical Universal Theme Design menu page for colors evidence.
- **Navigation** (`navigation`): canonical Universal Theme Design menu page for navigation evidence.
- **Grid Layout** (`grid-layout`): canonical Universal Theme Design menu page for grid layout evidence.
- **Page Templates** (`pages`): canonical Universal Theme Design menu page for page templates evidence.
- **Theme Styles** (`theme-styles`): canonical Universal Theme Design menu page for theme styles evidence.
- **Mobile Patterns / Navigation** (`navigation2`): canonical Universal Theme Design menu page for mobile patterns / navigation evidence.
- **Headers and Footers** (`headers-and-footers`): canonical Universal Theme Design menu page for headers and footers evidence.
- **Data Entry** (`data-entry2`): canonical Universal Theme Design menu page for data entry evidence.
- **Touch Gestures** (`touch-gestures`): canonical Universal Theme Design menu page for touch gestures evidence.
- **jQuery Mobile Components** (`jquery-mobile-components`): canonical Universal Theme Design menu page for jquery mobile components evidence.

### Expanded Components And Icons

- **Badge List** (`badges-list`): supports circular, stacked, grid, flexible box, span-horizontal, float-items, and theme-color variants.
- **Comments Component** (`comments-component`) and **Comments Report** (`comments-report`): use avatar, comment text, metadata, and status-update layouts for activity feeds.
- **Content Row Component** (`content-row-component`) and **Content Row Report** (`content-row-report`): use selection controls, icon or avatar slots, primary text, secondary text, and row actions.
- **Classic Report / Data Tables and Reports** (`standard-reports`), **Interactive Report** (`interactive-report`), **Interactive Grid** (`interactive-grid`), **Faceted Search** (`reports-faceted-search`), **Smart Filters** (`reports-smart-filters`), **Search Region** (`reports-search-region`), **Reflow Report** (`reflow-report`), and **Column Toggle Report** (`column-toggle-report`): keep report UIs dense, table-first, and filter/search controls close to the report they affect.
- **Dynamic Content Region** (`dynamic-content-region`): corresponds to PL/SQL Dynamic Content and should render generated HTML/text inside standard region chrome.
- **Forms** (`form-item-types`) and **Form Labels** (`forms`): preserve page-item density, required/help states, label alignment, item pre/post text, and stretch item options.
- **Map** (`map`): render map regions as data regions with compact controls and theme region framing; do not make map pages look like standalone consumer maps.
- **Media List Component** (`media-list-component`) and **Media List Report** (`media-list`): use icon/avatar media, heading, description, metadata, and badge/status slots.
- **Modal Dialogs** (`page-dialog`), **Page Dialog** (`page-dialog`), **Page Drawer** (`page-drawer`), **Inline Dialog** (`inline-dialog`), **Inline Drawer** (`inline-drawer`), and **Inline Popup** (`inline-popup`): preserve APEX dialog/drawer boundaries, compact headers, visible close affordances, and action button placement.
- **Tabs / Region Display Selector** (`region-display-selector`) and **Tabs Container** (`tabs`): use RDS for switching page regions and Tabs Container for tabbed region layout with simple or pill styling.
- **Timeline Component** (`timeline-component`) and **Timeline Report** (`timeline-reports`): use time-ordered activity rows with icon/avatar, title, metadata, and compact report-backed variants.
- **Value Attribute Pairs Report** (`value-attr-pairs-report`): use key-value report layouts with fixed or variable label widths, left or right aligned details, pagination behavior, and hidden-empty-value options.
- **Wizards / Wazards** (`wizard-region`): use Wizard Progress List, vertical orientation, clickable steps, and current-step label modes. `Wazards` is treated as a misspelling alias for Wizards in generation prompts.
- **Icons** (`icons`): use Font APEX classes such as `fa-*`, `a-Icon`, and `t-Icon`; use small/large icon sizing from the Universal Theme icon page and do not replace APEX icon semantics with emoji or unrelated SVG libraries.

## Iris Token Contract

Use these as the executable Iris defaults in Open Design prototypes.

### Color

- Extracted palette primary: `#5FB9B5`
- Live root primary / focus / selected navigation: `#00688c`
- Secondary attention: `#B3311F`
- Canvas or broad surface: `#FFFFFF`
- Component surface: `#FFFFFF`
- Text / on-surface: `#161513`
- Border: `rgba(0,0,0,.1)` for regions and `#E6E6E6` for report cells
- Success: `#388729`
- Warning: `#FBCE4A`
- Danger: `#CB1100`

### Typography

Iris uses Apple/system UI typography in the captured pages. Use `-apple-system` and the adjacent system stack observed in front matter for product UI. Observed sizes include 64px display text, 32px headings, 24px subheadings, 16px section headers, 14px body text, and 12px dense controls/reports. Reports, toolbar buttons, menu items, badges, and grid cells should usually render at 12px. Region titles use 16px at 600 weight.

### Shape, Spacing, And Depth

- Default button radius: `4px`
- Region radius: `2px`
- Card radius: `3px`
- Full badge radius: `16px` or pill
- Base layout rhythm: 8px, with 1-7px increments for dense APEX control padding
- Region shadow: `0 2px 4px -2px rgba(0,0,0,.1)`
- Button shadow: `0 2px 4px -3px rgba(0,0,0,.1)`
- Card hover shadow: `0 4px .5rem 0 rgba(0,0,0,.1)`

## Component Design Patterns

### Application Shell And Navigation

Iris screens should look like Oracle APEX workspaces: compact header, left navigation, title/breadcrumb region, and dense content regions. Use the live Iris root primary `#00688c` for selected navigation, focus rings, and primary actions while retaining the extracted Iris palette token `#5FB9B5` as the softer brand accent. Keep page and region surfaces white. Use the dark `#161513` on-surface value for text and reserve Iris teal for navigation/action emphasis.

### Buttons

Observed neutral buttons use `#FFFFFF` background, `#161513` text, `rgba(0,0,0,.075)` border, 4px radius, 12px font, 16px line height, and roughly 7px 11px padding. Primary buttons use `#00688c` with white text. Preserve the APEX button vocabulary: Normal, Primary, Warning, Danger, Success, Simple, Remove UI Decoration, Display as Link, Tiny, Small, Large, Stretch.

### Forms

Inputs use `#FFFFFF` background, `#161513` text, `rgba(0,0,0,.2)` border, 0px radius, and compact 4px 2px internal padding. Focus changes border to `#00688c`. Forms should expose labels, help text, validation, required state, and compact page-item layouts rather than oversized SaaS controls.

### Regions

Regions are the main composition primitive. Use `#FFFFFF` background, `rgba(0,0,0,.1)` border, 2px radius, and the observed small shadow. Region title bars use 16px / 600 text. Template Options frequently include header visibility, heading level, body padding, maximize button, body height, icon display, and collapsibility.

### Reports, Interactive Reports, And Interactive Grids

Reports are dense. Use white grid backgrounds, 12px font, 32px grid cell height, `#E6E6E6` cell borders, compact toolbar rows, and visible column headers. Interactive Grid and Interactive Report both expose Template Options for Remove Borders, Show Maximize Button, Header visibility, Heading Level, item spacing, item size, stretch form fields, and label alignment.

### Cards And Metrics

Cards use white surfaces, 1px borders, 3px radius, 1rem padding, and subtle shadows. Card icons and initials use the Iris primary color with white foreground. Metric Cards should place one emphasized value near a short label and supporting metadata; keep the surface compact and data-first.

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

- Generate Iris-only Oracle APEX screens. Do not combine this file with other Universal Theme styles unless the user explicitly asks for a multi-theme comparison.
- Prefer APEX terms in UI: Application, Page, Region, Interactive Grid, Interactive Report, Page Items, Dynamic Action, Process, Validation, Breadcrumb, Wizard.
- Use actual component names from the catalog when describing or generating UI.
- For data-heavy prototypes, use Interactive Grid, Interactive Report, Classic Report, Cards, Metric Card, and Region patterns before inventing generic dashboard cards.
- Keep density compact. Do not use oversized hero marketing sections except when the APEX Hero component is specifically requested.
- Preserve Iris surfaces, primary actions, tight borders, compact controls, and report-oriented layout.
- Use the secondary color sparingly for attention/warning/destructive accents, not as a dominant page theme.

## Source Coverage

All 71 unique Design, Components, and Icons page paths were HTTP/theme verified for Iris on `oracleapex.cn`: every path returned HTTP 200 with body class `apex-theme-iris`. Browser verification on the same session confirmed root primary token `#00688c`; the page-path inventory follows the Universal Theme Design, Components, and Icons menu and keeps canonical links on `oracleapex.com`.

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
