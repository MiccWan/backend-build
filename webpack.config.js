const path = require('path');
const nodeExternals = require('webpack-node-externals');

const rootPath = path.resolve(__dirname);
const srcRoot = path.join(rootPath, 'src');
const distRoot = path.join(rootPath, 'dist');

const serverConfig = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  target: 'node',
  node: {
    __dirname: false
  },
  context: srcRoot,
  entry: './index.js',
  output: {
    path: distRoot,
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': srcRoot
    },
    modules: [
      // see: https://github.com/webpack/webpack/issues/8824#issuecomment-475995296
      './node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: [
    nodeExternals()
  ]
};

module.exports = [
  serverConfig
];