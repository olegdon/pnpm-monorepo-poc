# olegdon/pnpm-monorepo-poc

<pre align="center">
 Nuxt 3 monorepo template, powered by PNPM, using Tailwind, Storybook and TypeScript
</pre>
<hr />

> big thanks to [lautr/initium-nuxt](https://github.com/lautr/initium-nuxt)

## Features
- [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- [Vite](https://vitejs.dev/) - Instant HMR
- [Vitest](https://vitest.dev/guide/) - A blazing fast unit test framework
- [Monorepo](https://pnpm.io/workspaces) - workspace setup using [pnpm](https://pnpm.io/)
- [🌬️ Tailwind 3](https://tailwindcss.com/) - the utility-first CSS framework
- [Storybook](https://storybook.js.org/) - build UI components and pages in isolation
- The `<script setup>` syntax
- [State Management via Pinia](https://pinia.esm.dev), see [./stores/AuthStore.ts](./stores/AuthStore.ts)
- [Vue Macros](https://vue-macros.sxzz.moe/) Explore and extend more macros and syntax sugar to Vue.
- APIs auto importing - for Composition API, VueUse, Components (localy & from design) and custom composables
- [TypeScript](https://www.typescriptlang.org/) - JavaScript, but strongly typed and better

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [Nuxt Devools](https://devtools.nuxtjs.org/) - Unleash Nuxt Developer Experience.

## Commands
```
# install all dependencies of the monorepo
pnpm install
# start apps in dev mode
pnpm dev
# build apps for prod
pnpm build
# start webapp for prod
pnpm start
# start dev storybook
pnpm storybook
```