import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/static/home";
import breweries_details from "../components/breweries/breweries_details";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: home},
    { path: '/breweries', component: breweries_details}

  ]
})
