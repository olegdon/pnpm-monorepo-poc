import { createResolver,defineNuxtModule } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
    setup(_, nuxt) {
        nuxt.hook('components:dirs', dirs => {
            dirs.push({
                path: join(__dirname, 'components'),
                prefix: 'cc',
            })
        })

        const { resolve } = createResolver(import.meta.url)

        nuxt.options.css.push(resolve('assets/main.css'))

        console.log('debug', nuxt.options.css)
    }
})