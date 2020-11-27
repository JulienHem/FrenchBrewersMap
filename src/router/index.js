import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/static/home";
import breweries_details from "../components/breweries/breweries_details";
import beers_details from "../components/beers/beers_details";
import contact_form from "../components/static/forms/contact_form";
import breweries_home from "../components/breweries/breweries_home";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: home},
    {
      path: '/breweries/:id',
      name: 'breweries',
      props: true,
      component: breweries_details
    },
    {path: '/beers', component: beers_details},
    {path: '/contact', component: contact_form}

  ]
})
