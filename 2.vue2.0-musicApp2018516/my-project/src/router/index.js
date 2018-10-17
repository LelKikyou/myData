import Vue from 'vue'
import Router from 'vue-router'
import Rank from "../components/rank/rank.vue"
import Recommend from "../components/recommend/recommend.vue"
import Search from "../components/search/search.vue"
import Singer from "../components/singer/singer.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
       path: '/', redirect: 'recommend' 
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/singer",
      component: Singer,
      children:[
        {
          name:"xx",
          path: ":id",
          component: ()=>import("../components/singer/singerDetails/singerDetails.vue")
        },
      ]
    }
  ]
})
