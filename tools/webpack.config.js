const path = require('path');

module.exports = {
  entry: path.resolve("./server/Server.js"),
  output: {
    path: path.resolve('dist'),
    filename: "[name].js"
  },
  /**
   * Without "target" webpack is not able to resolve node.js core modules.
   * Error: webpack < 5 used to include polyfills for node.js core modules by default.
   * This is no longer the case. Verify if you need this module and configure a polyfill for it.
   */
  target: "node", 
  mode: "none",
  /**
   * Webpack by default does not understand .jsx extension. 
   * If we import a file like `import App from './containers/App.jsx';` then it will work fine if we have defined our `babel-loader`.
   * But if we want to import a file without writing it's extension every time we import, 
   * we need to specify resolve to let webpack know we would be resolving these extensions.
   */
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
}
