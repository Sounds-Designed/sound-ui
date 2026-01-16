<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/91ceab67-89ce-4ef4-8678-4402a92baca5">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/51526d6d-e5ec-41b4-aa37-242dec1cdb27">
  <img alt="Sounds Designed UI" src="https://github.com/user-attachments/assets/51526d6d-e5ec-41b4-aa37-242dec1cdb27">
</picture>

# Sounds Designed UI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Sounds Designed UI harnesses the combined strengths of [Reka UI](https://reka-ui.com/), [Tailwind CSS](https://tailwindcss.com/), and [Tailwind Variants](https://www.tailwind-variants.org/) to offer developers an unparalleled set of tools for creating sophisticated, accessible, and highly performant user interfaces.

## Documentation

Visit https://ui.soundsdesigned.com to explore the documentation.

## Installation

```bash [pnpm]
pnpm add @sounds-designed/ui tailwindcss
```

```bash [yarn]
yarn add @sounds-designed/ui tailwindcss
```

```bash [npm]
npm install @sounds-designed/ui tailwindcss
```

```bash [bun]
bun add @sounds-designed/ui tailwindcss
```

### Nuxt

1. Add the Sounds Designed UI module in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@sounds-designed/ui']
})
```

2. Import Tailwind CSS and Sounds Designed UI in your CSS:

```css [assets/css/main.css]
@import "tailwindcss";
@import "@sounds-designed/ui";
```

Learn more in the [installation guide](https://ui.soundsdesigned.com/docs/getting-started/installation/nuxt).

### Vue

1. Add the Sounds Designed UI Vite plugin in your `vite.config.ts`:

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@sounds-designed/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui()
  ]
})
```

2. Use the Sounds Designed UI Vue plugin in your `main.ts`:

```ts [main.ts]
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@sounds-designed/ui/vue-plugin'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  routes: [],
  history: createWebHistory()
})

app.use(router)
app.use(ui)

app.mount('#app')
```

3. Import Tailwind CSS and Sounds Designed UI in your CSS:

```css [assets/main.css]
@import "tailwindcss";
@import "@sounds-designed/ui";
```

Learn more in the [installation guide](https://ui.soundsdesigned.com/docs/getting-started/installation/vue).

## Contribution

Thank you for considering contributing to Sounds Designed UI. Here are a few ways you can get involved:

- Reporting Bugs: If you come across any bugs or issues, please check out the reporting bugs guide to learn how to submit a bug report.
- Suggestions: Have any thoughts to enhance Sounds Designed UI? We'd love to hear them! Check out the [contribution guide](https://ui.soundsdesigned.com/docs/getting-started/contribution) to share your suggestions.

## Local Development

Follow the docs to [set up your local development environment](https://ui.soundsdesigned.com/docs/getting-started/contribution#local-development) and contribute.

## Credits

- [nuxt/nuxt](https://github.com/nuxt/nuxt)
- [nuxt/icon](https://github.com/nuxt/icon)
- [nuxt/fonts](https://github.com/nuxt/fonts)
- [nuxt-modules/color-mode](https://github.com/nuxt-modules/color-mode)
- [unovue/reka-ui](https://github.com/unovue/reka-ui)
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [vueuse/vueuse](https://github.com/vueuse/vueuse)

## License

Licensed under the [MIT license](https://github.com/Sounds-Designed/ui/blob/main/LICENSE.md).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@sounds-designed/ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@sounds-designed/ui

[npm-downloads-src]: https://img.shields.io/npm/dm/@sounds-designed/ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npm.chart.dev/@sounds-designed/ui

[license-src]: https://img.shields.io/github/license/Sounds-Designed/ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/Sounds-Designed/ui/blob/main/LICENSE.md

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt
[nuxt-href]: https://nuxt.com
