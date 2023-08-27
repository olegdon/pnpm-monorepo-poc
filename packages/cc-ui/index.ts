import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
    setup(_, nuxt) {
        nuxt.hook('components:dirs', dirs => {
            dirs.push({
                path: join(__dirname, 'lib/components'),
                prefix: 'cc',
            })
        })

        const { resolve } = createResolver(import.meta.url)

        // Add plugin
        // addPlugin(resolve('lib/plugins/pluginName.ts'))
    }
})