import { name, version } from '../package.json'


export interface ModuleOptions {
}

declare module '#app' {
  interface RuntimeNuxtHooks {
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    docs: 'https://ui.soundsdesigned.com/docs/getting-started/installation/nuxt',
    configKey: 'sUI',
    compatibility: {
      nuxt: '>=4.0.0'
    }
  },
  async setup(options, nuxt) {
  }
})
