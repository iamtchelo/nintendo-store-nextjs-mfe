const path = require("path");
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "shell",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./PageWrapper": "./components/PageWrapper.js",
    "./Button": "./components/Button.js",
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  assetPrefix: "http://localhost:3000",
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
          store: "store",
          contact: "contact",
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
