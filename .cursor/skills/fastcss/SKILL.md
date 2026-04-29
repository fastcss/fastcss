---
name: fastcss
description: Reference for fastcss — a pure-SASS utility CSS framework. Use when writing HTML/JSX/TSX class names in a project that uses fastcss, when modifying _config.scss, when adding new colors/shadows/gradients/spacing values, or when the user asks which fastcss class to use for a CSS property.
---

# fastcss

Pure-SASS utility CSS framework. Classes are generated at build time from `$config` in `scss/_config.scss`. Source lives at `/home/lucifer/Projects/fastcss`. The compiled CSS is at `dist/fastcss.css`.

## Key conventions

- All utility classes work with responsive prefixes: `xs:` `sm:` `md:` `lg:` (≥576px, ≥768px, ≥992px, ≥1200px)
- Color, gradient, and shadow classes also generate `hover:` `focus:` `active:` state variants automatically
- Percentages in class names are escaped: `w-100\%`, `rad-50\%`
- In JSX/TSX, escape colons: `className="blue-fill\:300 hover\:bs-2"`
- In plain HTML, no escaping needed: `class="blue-fill:300 hover:bs-2"`

## Config structure (`scss/_config.scss`)

```scss
$config: (
  'typography': ( 'font-family', 'font-size', 'font-weight', 'font-style', 'line-height', ... ),
  'box':        ( 'padding', 'margin', 'border-width', 'border-radius',
                  'width', 'height', 'positions', 'z-index', 'shadow' ),
  'grid':       ( 'columns': 12, 'gutter': 30px, 'screens': (...) ),
  'colors':     ( 'palette', 'variants', 'gradients' ),
  'utilities':  ( 'vertical-align', 'cursor', 'list-style-type', 'flexbox' ),
)
```

## Extending — common tasks

### Add a color
```scss
// In colors.palette — format: 'name:variant1,variant2': #hex
// No variant list = all 10 variants generated (50–900)
'purple:50,300,700': #9C27B0,
// → .purple-text, .purple-fill, .purple-border + :50 :300 :700 variants
// → hover:/focus:/active: state variants for all
```

### Add a gradient
```scss
// In colors.gradients — key becomes the class suffix
'purple-to-blue': linear-gradient(90deg, #9C27B0, #2196F3),
// → .grad-purple-to-blue + hover:/focus:/active: variants
```

### Add a shadow
```scss
// In box.shadow — key becomes the class suffix
'modal': "0 24px 48px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.18)",
// → .bs-modal + hover:/focus:/active: variants
```

### Add a spacing value
```scss
// In box.padding or box.margin — just append the value
'padding': (0, 1px, 2px, 3px, 4px, 5px, 10px, 15px, 20px, 25px),
// → .p-25 .pt-25 .pr-25 .pb-25 .pl-25 .pv-25 .ph-25 (+ responsive)
```

### Recompile after config changes
```bash
sass scss/build.scss dist/fastcss.css
```

## SCSS file map

| File | Responsibility |
|------|---------------|
| `scss/_config.scss` | Single source of truth — edit here to add/remove classes |
| `scss/_core.scss` | Entry point — wires mixins to config loop |
| `mixins/_colors.scss` | Color text/fill/border + state variants, gradients |
| `mixins/_box.scss` | Padding, margin, border-width, radius, width, height, positions, z-index, shadows |
| `mixins/_flexbox.scss` | All flexbox helpers via `make-flexbox($prefix)` |
| `mixins/_typography.scss` | Font family/size/weight/style, line-height, word/letter-spacing |
| `mixins/_utilities.scss` | Display, position, overflow, float, text, cursor, group, list, vertical-align |
| `mixins/_toggles.scss` | `hover:child-{display}`, `hover:sibling-{display}` etc. |
| `mixins/_grid.scss` | `.container`, `.row`, `.col-{n}`, offset/push/pull, row utilities |

## Quick class reference

For the complete class list see [classes.md](classes.md).

### Most-used patterns

```
Spacing
  p-{0|1|2|3|4|5|10|15|20}   pt- pr- pb- pl- pv- ph-
  m-{0|5|10|15|20|30|40|auto} mt- mr- mb- ml- mv- mh-  mh-auto

Colors
  {color}-text          {color}-text:{variant}   hover:{color}-text
  {color}-fill          {color}-fill:{variant}   hover:{color}-fill
  {color}-border + b-{n}                         hover:{color}-border
  grad-{key}                                     hover:grad-{key}

Flexbox (all responsive)
  flex  flex-col  flex-row  flex-wrap  flex-nowrap
  justify-{start|end|center|between|around|evenly}
  items-{start|end|center|baseline|stretch}
  self-{auto|start|end|center|baseline|stretch}
  content-{start|end|center|between|around|evenly|stretch}
  grow  grow-0  shrink  shrink-0
  flex-{1..6}  flex-auto  flex-initial  flex-none
  order-{first|last|none|1..12}
  flex-center   flex-between   flex-col-center   (shorthand helpers)

Grid
  container  container-fluid
  row  col  col-{1..12}  col-{n}-offset  col-{n}-push  col-{n}-pull

Typography
  fs-{xxs|xs|sm|base|lg|xl|hg}   fw-{400|600|700}
  ff-{base|sans|serif|mono}       lh-{0|1|xs|base|lg}
  text-{left|center|right|uppercase|lowercase|capitalize}
  text-{strike|underline|nowrap|wrap}   no-decoration

Shadows (+ hover:/focus:/active: variants)
  bs-{0..5}  bs-card   hover:bs-{key}

State child/sibling toggles
  {hover|focus|active}:{child|sibling}-{block|flex|inline|inline-block|grid|hide}
  e.g. hover:child-block  focus:sibling-flex  active:child-hide

Utilities
  relative absolute fixed static sticky
  of-hidden  of-auto  of-scroll  of-auto-y  of-scroll-x  ...
  float-left  float-right  clearfix
  va-middle  va-top  va-bottom  va-text-top  ...
  cursor-pointer  cursor-grab  cursor-zoom-in  ...
  block  hidden  inline  inline-block  visible  invisible
  list-none  list-disc  list-decimal  list-circle  ...
  group  group-item  group-vertical  group-center  ...
  rad-{0|3|5|10|50\%}   b-{1|2|3|4}   z-{-1|1|2|3|99}
  w-100\%  h-100\%  mh-auto
```
