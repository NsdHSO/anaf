const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({


  name: 'dashboard',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './apps/dashboard/src/app/dasboard-planning/dashboard-planning.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
