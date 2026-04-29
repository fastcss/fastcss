# fastcss — Complete Class Reference

## Colors

**Default palette colors:**
- `transparent`, `black`, `white` — base only, no variants
- `gray` — all variants (50–900)
- `red` — 50, 100, 300, 700, 900
- `green` — 50, 300, 700
- `blue` — 50, 100, 300, 700, 900
- `orange` — 50, 300, 700

**Variant lightness scale** (relative to base hex):
`50`=+88% · `100`=+70% · `200`=+50% · `300`=+30% · `400`=+15% · `500`=0 (base) · `600`=-9.25% · `700`=-21% · `800`=-32% · `900`=-52.5%

| Pattern | CSS property |
|---------|-------------|
| `{color}-text` | `color` (500 base) |
| `{color}-text:{variant}` | `color` |
| `{color}-fill` | `background-color` (500 base) |
| `{color}-fill:{variant}` | `background-color` |
| `{color}-border` | `border-color` (500 base) — needs `b-{n}` |
| `{color}-border:{variant}` | `border-color` |
| `hover:{color}-text` / `focus:` / `active:` | state variant |
| `hover:{color}-fill` / `focus:` / `active:` | state variant |
| `hover:{color}-border` / `focus:` / `active:` | state variant |

**Gradients** (key → suffix):

| Class | Value |
|-------|-------|
| `grad-0` | `linear-gradient(90deg, #2196F3 0%, grey 100%)` |
| `grad-1` | `linear-gradient(90deg, grey 0%, #F44336 100%)` |
| `grad-2` | `radial-gradient(#2196F3, #9E9E9E)` |
| `grad-blue-to-grey` | `radial-gradient(#2196F3, #9E9E9E)` |
| `hover:grad-{key}` / `focus:` / `active:` | state variant |

---

## Box

### Padding — `p-` `pt-` `pr-` `pb-` `pl-` `pv-` `ph-`
Values: `0` `1` `2` `3` `4` `5` `10` `15` `20`

### Margin — `m-` `mt-` `mr-` `mb-` `ml-` `mv-` `mh-`
Values: `0` `5` `10` `15` `20` `30` `40` `auto`
Special: `mh-auto` = center block horizontally

### Border width — `b-` `bt-` `br-` `bb-` `bl-` `bv-` `bh-`
Values: `0` `1` `2` `3` `4`
Note: `[class*="-border"]` auto-sets `border-style: solid; border-width: 0`

### Border radius — `rad-` `radtl-` `radtr-` `radbl-` `radbr-`
Values: `0` `3` `5` `10` `50\%`

### Width — `w-` `minw-` `maxw-`
Values: `10` `15` `20` `1200` `100\%`

### Height — `h-` `minh-` `maxh-`
Values: `10` `15` `20` `100\%` `1`

### Positions (for absolute/fixed/sticky) — `top-` `right-` `bottom-` `left-`
Values: `0` `5` `10` `15`

### Z-index — `z-`
Values: `-1` → `z--1` · `1` `2` `3` `99`

### Shadows — `bs-{key}` (+ all state variants)

| Class | box-shadow |
|-------|-----------|
| `bs-0` | none |
| `bs-1` | 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24) |
| `bs-2` | 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23) |
| `bs-3` | 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23) |
| `bs-4` | 0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22) |
| `bs-5` | 0 19px 38px rgba(0,0,0,.30), 0 15px 12px rgba(0,0,0,.22) |
| `bs-card` | 0 2px 8px rgba(0,0,0,.12), 0 1px 3px rgba(0,0,0,.08) |
| `hover:bs-{key}` / `focus:` / `active:` | state variant |

---

## Typography

| Class | CSS |
|-------|-----|
| `ff-base` / `ff-sans` | font-family: Roboto, -apple-system, sans-serif |
| `ff-serif` | font-family: serif |
| `ff-mono` | font-family: monospace |
| `fs-xxs` | font-size: 0.625rem (10px) |
| `fs-xs` | font-size: 0.75rem (12px) |
| `fs-sm` | font-size: 0.875rem (14px) |
| `fs-base` | font-size: 16px |
| `fs-lg` | font-size: 1.25rem (20px) |
| `fs-xl` | font-size: 1.5rem (24px) |
| `fs-hg` | font-size: 2rem (32px) |
| `fw-400` / `fw-600` / `fw-700` | font-weight |
| `fs-normal` / `fs-italic` / `fs-oblique` | font-style |
| `lh-0` | line-height: 0 |
| `lh-1` / `lh-xs` | line-height: 1 |
| `lh-base` | line-height: 1.375 |
| `lh-lg` | line-height: 1.5 |
| `ws-base` | word-spacing: .03em |
| `ls-base` | letter-spacing: 0 |
| `text-left` / `text-center` / `text-right` | text-align |
| `text-uppercase` / `text-lowercase` / `text-capitalize` | text-transform |
| `text-strike` | text-decoration: line-through |
| `text-underline` | text-decoration: underline |
| `no-decoration` / `text-no-decoration` | text-decoration: none |
| `text-nowrap` | white-space: nowrap |
| `text-wrap` | white-space: wrap |

State variants: `hover:text-strike` · `hover:text-underline` · `hover:no-decoration`

---

## Flexbox

All flexbox classes are responsive (`xs:flex-col`, `sm:justify-center`, etc.).

| Class | CSS |
|-------|-----|
| `flex` | display: flex |
| `inline-flex` | display: inline-flex |
| `flex-1` … `flex-6` | flex: 1 … 6 |
| `flex-auto` | flex: 1 1 auto |
| `flex-initial` | flex: 0 1 auto |
| `flex-none` | flex: none |
| `flex-row` | flex-direction: row |
| `flex-row-reverse` | flex-direction: row-reverse |
| `flex-col` | flex-direction: column |
| `flex-col-reverse` | flex-direction: column-reverse |
| `flex-wrap` | flex-wrap: wrap |
| `flex-wrap-reverse` | flex-wrap: wrap-reverse |
| `flex-nowrap` | flex-wrap: nowrap |
| `grow` | flex-grow: 1 |
| `grow-0` | flex-grow: 0 |
| `shrink` | flex-shrink: 1 |
| `shrink-0` | flex-shrink: 0 |
| `basis-auto` | flex-basis: auto |
| `basis-full` | flex-basis: 100% |
| `basis-0` | flex-basis: 0 |
| `justify-start` | justify-content: flex-start |
| `justify-end` | justify-content: flex-end |
| `justify-center` | justify-content: center |
| `justify-between` | justify-content: space-between |
| `justify-around` | justify-content: space-around |
| `justify-evenly` | justify-content: space-evenly |
| `items-start` | align-items: flex-start |
| `items-end` | align-items: flex-end |
| `items-center` | align-items: center |
| `items-baseline` | align-items: baseline |
| `items-stretch` | align-items: stretch |
| `content-start` | align-content: flex-start |
| `content-end` | align-content: flex-end |
| `content-center` | align-content: center |
| `content-between` | align-content: space-between |
| `content-around` | align-content: space-around |
| `content-evenly` | align-content: space-evenly |
| `content-stretch` | align-content: stretch |
| `self-auto` | align-self: auto |
| `self-start` | align-self: flex-start |
| `self-end` | align-self: flex-end |
| `self-center` | align-self: center |
| `self-baseline` | align-self: baseline |
| `self-stretch` | align-self: stretch |
| `order-first` | order: -9999 |
| `order-last` | order: 9999 |
| `order-none` | order: 0 |
| `order-{1..12}` | order: 1..12 |
| `flex-center` | display:flex; align-items:center; justify-content:center |
| `flex-between` | display:flex; align-items:center; justify-content:space-between |
| `flex-col-center` | display:flex; flex-direction:column; align-items:center; justify-content:center |

---

## Grid (12-column)

| Class | Description |
|-------|-------------|
| `container` | Centered, max-width per breakpoint, gutter padding |
| `container-fluid` | Full-width, gutter padding only |
| `row` | `display:flex; flex-wrap:wrap` + negative gutter margins |
| `row-reverse` | `flex-direction: row-reverse` inside a row |
| `col` | Auto-width column (flex-grow:1) |
| `col-{1..12}` | Fixed column width as n/12 fraction |
| `col-{n}-offset` | `margin-left: n/12 * 100%` |
| `col-{n}-push` | `left: n/12 * 100%` |
| `col-{n}-pull` | `right: n/12 * 100%` |

All column classes are responsive: `xs:col-12 sm:col-6 md:col-4 lg:col-3`

**Row alignment helpers** (apply to `.row`):

| Class | CSS |
|-------|-----|
| `items-start` | justify-content: flex-start |
| `items-end` | justify-content: flex-end |
| `items-center` | justify-content: center |
| `items-around` | justify-content: space-around |
| `items-between` | justify-content: space-between |
| `items-top` | align-items: flex-start |
| `items-middle` | align-items: center |
| `items-bottom` | align-items: flex-end |
| `items-reverse` | flex-direction: row-reverse |

---

## Utilities

All are responsive unless noted.

### Display
`block` / `show` · `hidden` / `hide` · `inline` · `inline-block` · `table` · `table-row` · `table-cell` · `flex` · `inline-flex` · `visible` · `invisible`

### Position
`relative` · `absolute` · `fixed` · `static` · `sticky`

### Overflow
`of-hidden` · `of-visible` · `of-auto` · `of-auto-y` · `of-auto-x` · `of-scroll` · `of-scroll-y` · `of-scroll-x`

### Float & Clear
`float-left` · `float-right` · `float-none` · `clear-left` · `clear-right` · `clear-both` · `clear-none` · `clearfix`

### Vertical align — `va-{value}`
`va-initial` · `va-inherit` · `va-middle` · `va-super` · `va-sub` · `va-top` · `va-bottom` · `va-text-top` · `va-text-bottom`

### Group (flex row container)
`group` (container) · `group-item` (shrink-0 child) · `group-item-shrink` · `group-shrink` · `group-vertical` · `group-center` · `group-left` · `group-right`

### List
`list-none` · `list-disc` · `list-circle` · `list-square` · `list-decimal` · `list-upper-roman` · `list-lower-roman` · `list-upper-latin` · `list-lower-latin` · `list-outside` · `list-inside`

### Cursor — `cursor-{value}`
`cursor-default` · `cursor-none` · `cursor-grab` · `cursor-grabbing` · `cursor-help` · `cursor-pointer` · `cursor-zoom-in` · `cursor-zoom-out`

---

## State child/sibling toggles

Format: `{state}:{target}-{display}`

- **States:** `hover` · `focus` · `active`
- **Targets:** `child` (→ `> *`) · `sibling` (→ `~ *`)
- **Displays:** `block` · `flex` · `inline` · `inline-block` · `grid` · `hide`

| Example | Effect |
|---------|--------|
| `hover:child-block` | Show hidden children as block on hover |
| `hover:child-flex` | Show hidden children as flex on hover |
| `hover:child-hide` | Hide all children on hover |
| `focus:sibling-flex` | Show sibling as flex when element is focused |
| `active:child-hide` | Hide children while element is clicked |
| `hover:sibling-block` | Show sibling as block on hover |
| `active:sibling-flex` | Show sibling as flex while pressed |
