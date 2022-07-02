import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)
    // import fa from 'vuetify/lib/locale/fa'
    // import fr from 'vuetify/lib/locale/fr'
    // import en from './i18n/vuetify/en'
    // Vue.component('my-component', {
    //     methods: {
    //         changeLocale() {
    //             this.$vuetify.lang.current = 'en'
    //         },
    //     },
    // })

// export default new Vuetify({
//     lang: {
//         locales: { fa, fr, en },
//         current: 'en',
//     },
// })


const opts = {}

export default new Vuetify({
    opts,
    icons: {
        iconfont: 'mdi',
    }
    // theme: {
    //     dark: true,
    // },
})