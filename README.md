# nintendo-store-nextjs-mfe

![Application Screenshot](https://raw.githubusercontent.com/iamtchelo/nintendo-store-nextjs-mfe/main/screenshot.png)

### Referencies

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [module-federation/nextjs-mf](https://github.com/module-federation/nextjs-mf)
- [module-federation/medusa](https://github.com/module-federation/medusa)
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)

### How to run

First, install the dependencies using yarn

```sh
yarn
```

Running app in dev environment

```sh
yarn dev
```

It will exposes 3 apps at `http://localhost`:

- `http://localhost:3000` - Shell Application
- `http://localhost:3001` - Store Application
- `http://localhost:3002` - Contact Application
