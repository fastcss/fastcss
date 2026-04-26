
# Fastcss

A config-driven CSS utility framework. Define your design tokens once in `_config.scss` and Fastcss generates all your utility classes — colors, typography, spacing, flexbox, grid, shadows, gradients, and more.

## Documentation

Full class reference and live examples at **[fastcss.org](https://fastcss.org)**.

------

## Installation

1. Install via npm or yarn

```
npm i fastcss
```
```
yarn add fastcss
```

2. Copy the default configuration into your project

```
node_modules/fastcss/scss/_config.scss
```

3. Import fastcss with your custom configuration and compile

```scss
@use 'fastcss' with ($config: ...);
```

4. Build the CSS

Fastcss uses Webpack, but any bundler that supports the Sass `@use` rule works fine. See `node_modules/fastcss/scss/build.scss` for how the module is imported with the default config, and `webpack.config.js` for the build setup.

------

## Usage

### Responsive prefixes

All utility classes support responsive breakpoint prefixes:

```html
<div class="flex sm:flex-col md:flex-row">...</div>
```

Available prefixes: `xs:` `sm:` `md:` `lg:`

### State variants

Interactive state prefixes work on most utility classes:

```html
<div class="bs-1 hover:bs-3">...</div>
```

Available prefixes: `hover:` `focus:` `active:`

### Child/sibling state toggles

Toggle visibility or display of child or sibling elements based on parent state:

```html
<!-- shows .dropdown when .parent is hovered -->
<div class="parent hover:child-show">
  <div class="dropdown child-hidden">...</div>
</div>
```

------

## Configuration

All design tokens are defined in `_config.scss`. Key sections:

| Key | What it controls |
|---|---|
| `colors.palette` | Color names, variants, and their base hex values |
| `colors.gradients` | Named and numeric gradient definitions |
| `typography` | Font sizes, weights, families, line heights |
| `box.shadow` | Named and numeric box shadow definitions |
| `box.border-width` | Border width scale |
| `box.border-radius` | Border radius scale |
| `box.width` / `box.height` | Width and height scale |
| `box.spacing` | Margin and padding scale |

Example — adding a custom color:

```scss
'colors': (
  'palette': (
    'brand:100,500,900': #6200EA,
  ),
),
```

This generates `.brand-text:500`, `.brand-fill:500`, `.brand-border:500`, and their responsive and state variants.

------

## Contributing

Follow the existing patterns and submit a PR — any contribution is welcomed.

## License

Fastcss is open-sourced under the MIT license.
