import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Landing from './components/Landing';
import Signup from './components/SignUp';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Landing },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  vuetify,

  render: h => {
    return h(App)
  }
});