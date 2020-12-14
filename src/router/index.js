import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/static/Home";
import breweries_details from "../components/breweries/BreweriesDetails";
import beers_details from "../components/beers/BeersDetails";
import contact_form from "../components/static/forms/ContactForm";
import brewery_region from "../components/breweries/BreweryRegion";

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
    {path: '/brewery_region/:region',
    name: 'breweryRegion',
    props: true,
    component: brewery_region
    },
    {path: '/beers', component: beers_details},
    {path: '/contact', component: contact_form}

  ]
})
