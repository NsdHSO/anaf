const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const {shareAll} = require("@angular-architects/module-federation/webpack");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "dashboard",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "dashboard",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './apps/dashboard/src/app/dasboard-planning/dashboard-planning.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "fleet": "http://localhost:4202/remoteEntry.js",
        //     "shell": "http://localhost:4200/remoteEntry.js",
        //
        // },

      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },

    }),
    sharedMappings.getPlugin()
  ],
};
