import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Login from '@/components/pages/login'
import Admin from '@/components/pages/admin/Admin'
import Category from '@/components/pages/admin/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: {path:'login'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect:{path:"/admin/Category"},
      children : [
        {
          path: 'category',
          name: 'admin.category',
          component: Category
        }
      ]
    }
  ],
  mode:"history"    /* for remove # from url before login routing */
})
