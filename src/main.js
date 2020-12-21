// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import { ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})



