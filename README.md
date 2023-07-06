# fe

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


No tests here at all, I died on the backend.

It's ugly I know.

A few things missing and know issues are:
-The dropdown for the search functionality (missing)
-Pagination (missing)
-Some places down redirect on success
-Missing alerts here and there
-The search and create "views" are there as components, so it's not technically routed to but just
displayed as a result of a condition