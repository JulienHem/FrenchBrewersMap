// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import { ValidationProvider, extend, configure } from 'vee-validate';
import {alpha_dash, alpha, integer, required} from "vee-validate/dist/rules";

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)

extend('alpha_dash', alpha_dash)
extend('alpha', alpha)
extend('integer', integer)
extend('required', required)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})



