import Vue from 'vue'
import Router from 'vue-router'
import ImageList from '@/components/ImageList.vue'
import MainView from '@/components/MainView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-view',
      component: MainView
    },
    {
      path: '/all',
      name: 'image-list',
      component: ImageList
    }
  ]
})
