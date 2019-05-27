import HelloWorld from '../components/HelloWorld.vue';

import login from '../components/user/login.vue'

const UserRouter = [{
    path: '/user',
    name: 'login',
    component: login
}, {
    path: '/user/login',
    name: 'login',
    component: login
}]
export default UserRouter 