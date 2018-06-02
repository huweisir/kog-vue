import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import UserRouter from './user'

Vue.use(Router)
const routers = [...UserRouter];
console.log(routers)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, ...routers]
})
