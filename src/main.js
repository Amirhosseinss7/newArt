import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "./plugins/vuetify"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueI18n from 'vue-i18n'
import i18n from './i18n'

Vue.use(VueI18n)



Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let language = to.params.lang
    if (!language) language = 'en'

    i18n.locale = language
    next()
})

new Vue({
    router,
    vuetify,
    i18n,

    // css,
    render: h => h(App)
}).$mount('#app')