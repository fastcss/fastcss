const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

// webpack.config.js
module.exports = {
  mode: devMode ? "development" : "production",
  entry: ['./scss/build.scss'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  stats: {
    warnings: true,
    warningsFilter: [],
  },
  devtool: devMode ? 'source-map' : 'eval-cheap-module-source-map',
  module: {
    rules: [
      // css/sass rules
      {
        test: /\.(sa|sc)ss$/,
        use: [
          // creates style nodes from JS strings
          // {
          //   loader: "style-loader"
          // },

          // mincss extract plugin loader
          {
            // Extracts the CSS into a separate file and uses the
            // defined configurations in the 'plugins' section
            loader: MiniCssExtractPlugin.loader
          },

          // translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },

          // load postcss modules
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-sort-media-queries')({
                    // available options: mobile-first, desktop-first, function(a, b)
                    // custom example: return a.localeCompare(b);
                    sort: 'mobile-first'
                  }),
                  require('autoprefixer')()
                ]
              }
            }
          },

          // compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                quietDeps: false, // <-- show warnings from dependencies too
                indentedSyntax: false,
                includePaths: [path.resolve(__dirname, "scss")],
              },
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "fastcss.css" : "fastcss.min.css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new IgnoreEmitPlugin(['main.js', 'main.js.map'])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
