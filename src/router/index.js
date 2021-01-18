import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/static/Home";
import breweries_details from "../components/breweries/BreweriesDetails";
import beers_details from "../components/beers/BeersDetails";
import contact_form from "../components/static/forms/ContactForm";
import brewery_region from "../components/breweries/BreweryRegion";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: home},
    {
      // Permet de définir la route
      path: '/breweries/:id',
      name: 'breweries',
      // Permet de définir les propriétés
      props: true,
      // Définit dans quel composant on veut se rendre avec cette route
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
