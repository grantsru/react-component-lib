const webpackConfig = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [],
  webpackFinal: (config) => {
    config.resolve.extensions.push(".ts", ".tsx");
    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules }
    };
  }
};
