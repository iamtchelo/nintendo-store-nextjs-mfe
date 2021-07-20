const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "store",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Products": "./components/Products.js",
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  assetPrefix: "http://localhost:3001",
  future: {
    webpack5: true,
  },
  images: {
    domains: ["a-static.mlcdn.com.br", "livecards.it", "cdn.awsli.com.br"],
  },
  webpack(config, options) {
    config.experiments = { topLevelAwait: true };

    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          shell: "shell",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
});
