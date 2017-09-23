import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pager/index'
import Login from '@/pager/login'
import Search from '@/pager/search'
import Detail from '@/pager/Detail'
import Particles from '@/pager/particles'

Vue.use(Router)

export default new Router({
	mode: 'history',
    routes: [
	    {
	      path: '/Index',
	      name: 'Index',
	      component: Index
	    },
	    {
	      path: '/Login',
	      name: 'Login',
	      component: Login
	    },
	    {
	      path: '/Search',
	      name: 'Search',
	      component: Search
	    },
	    {
	      path: '/Particles',
	      name: 'Particles',
	      component: Particles
	    },
	    {
	      path: '/Detail/:id',
	      name: 'Detail',
	      component: Detail
	    },
	    {
	      path: '*',
	      redirect: '/Index'
	    }
    ]
})
