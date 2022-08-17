const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            math: "always",
            modifyVars: {
              "@primary-color": "#419cb9",
              "@link-color": "#0e678e",
              "@font-size-base": "14px",
            },
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
