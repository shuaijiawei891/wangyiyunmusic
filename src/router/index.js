import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import hot from '../components/hot.vue'
import recommend from '@/components/recommend'
import search from '@/components/search'
import songlist from '@/components/songlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',    
      component: index,
      children:[
          {  
            path: 'hot',                      
            component: hot
          },{
            path: 'recommend',           
            component: recommend
          }
          ,{
            path: 'search',           
            component: search
          }            
      ]
    },   
    {
      path: "/songlist/:id",
      component: songlist
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
