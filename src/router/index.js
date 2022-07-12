import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home/home.vue'
import Search from '@/views/Search/search.vue'
import Play from '@/views/Play/play.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    component: Layout,
     children: [
                {
                    path: '/layout/home',
                    component: Home,
                    meta: {
                    title:'首页'
                    }
                },
                {
                    path: '/layout/search',
                     component: Search,
                     meta: {
                    title:'搜索'
                    }
                }
    ]
  },
   {
        path: '/',
        redirect: '/layout/home'
  },
  {
    path: '/play',
    component: Play ,
  }
]

const router = new VueRouter({
  routes
})

export default router
