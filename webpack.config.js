const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

// it cleans unused webpack generated files (like main.js)
class MiniCssExtractPluginCleanup {
  constructor(deleteWhere = /\.js(\.map)?$/) {
    this.shouldDelete = new RegExp(deleteWhere)
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("MiniCssExtractPluginCleanup", (compilation, callback) => {
      Object.keys(compilation.assets).forEach((asset) => {
        if (this.shouldDelete.test(asset)) {
          delete compilation.assets[asset]
        }
      })
      callback()
    })
  }
}

// webpack.config.js
module.exports = {
  mode: devMode ? "development" : "production",
  entry: ['./scss/build.scss'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
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

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('postcss-sort-media-queries')({
                  // available options: mobile-first, desktop-first, function(a, b)
                  // custom example: return a.localeCompare(b);
                  sort: 'mobile-first'
                }),
                require('autoprefixer')()
              ]
            }
          },

          // compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                indentWidth: 2,
                includePaths: [path.resolve(__dirname, "scss")],
              },
            }
          },
        ]
      },
      // file rules
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "fastcss.css" : "fastcss.min.css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new MiniCssExtractPluginCleanup()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
