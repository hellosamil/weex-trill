/**
 * Created by zwwill on 2017/8/29.
 */
import Router from 'vue-router'
import ViewHome from './assets/views/home.vue'
import ViewTopic from './assets/views/topic.vue'
import ViewClass from './assets/views/class.vue'


Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: ViewHome },
        { path: '/topic', component: ViewTopic },
        { path: '/class', component: ViewClass },
       
    ]
})