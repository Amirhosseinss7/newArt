import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import i18n from './../i18n'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: `/${i18n.locale}`
    },
    {
        path: '/:lang',
        component: {
            render(c) { return c('router-view') }
        },
        children: [{
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: 'menu',
                name: 'Menu',
                component: Menu
            }
        ]

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router