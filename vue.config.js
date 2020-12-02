var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(
        {
          patterns: [
            {
              from: 'node_modules/mavon-editor/dist/highlightjs',
              to: path.resolve(__dirname, './dist/highlightjs'),
            },
            {
              from: 'node_modules/mavon-editor/dist/markdown',
              to: path.resolve(__dirname, './dist/markdown'),
            },
            {
              from: 'node_modules/mavon-editor/dist/katex',
              to: path.resolve(__dirname, './dist/katex')
            }
          ]
        }
      )
    ]
  },
  pages: {
    home: {
      template: "public/index.html",
      entry: "src/frontend.js",
      filename: "index.html",
      title: "blog",
      keywords: "blog",
    },
    admin: {
      template: "public/index.html",
      entry: "src/backend.js",
      filename: "backend.html",
      title: "blog",
      keywords: "blog",
    }
  }
}