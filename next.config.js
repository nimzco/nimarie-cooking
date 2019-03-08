const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(withTypescript({
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
}));
