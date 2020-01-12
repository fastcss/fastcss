# Fastcss

Code fast with this awesome css framework.

------

## Installation

1. Install via npm

```npm i fastcss```

2. Copy the default configuration from here:

```node_modules/fastcss/scss/_config.scss```

3. Import fastcss with your custom configuration and compile it.

```@use 'fastcss' with ($config: ...);```

**Important:** If you use webpack with the sass-loader and have issues importing the module, be sure to add the folowing line to the includePaths array:

```
includePaths: [
  ...
  node_modules/fastcss/scss
]
```

4. Build the css

**Note:** Fastcss uses Webpack to build the css, you can use whatever bundler you want as long as it compiles the scss and it understands the new **@use** at-rule from sass. Check the folowing file to see how the module is imported and compiled with the default config:

```node_modules/fastcss/scss/build.scss```

Also don't forget to check the **webpack.config.js** file.

## Documentation

Check [fastcss.org](http://fastcss.org/) for the full documentation.

## Contributing

The contribution guide is on the road. For now, just follow the patterns and submit a PR, any contribution is welcomed.

## License

Fastcss is open-sourced under the MIT license.
