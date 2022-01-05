import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Epikoinwnia from '../views/Epikoinwnia.vue'
import FAQ from '../views/FAQ.vue'
import Faq_log from '../components/Faq_log.vue'
import Aithseis from '../components/Aithseis.vue'
import Thankyou_page from '../components/Thankyou_page.vue'
import UserProfile from '../views/User_Profile.vue'
import UserPersonal from '../components/User_personal.vue'
import MyAithseis from '../components/Aithseis_mou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Epikoinwnia',
    name: 'Epikoinwnia',
    component: Epikoinwnia
  },
  {
    path: '/FAQ',
    redirect: '/FAQ/o-logariasmos-mou',
    name: 'FAQ',
    component: FAQ,
    children: [
      {
        path: '/FAQ/o-logariasmos-mou',
        name: 'faq_log',
        component: Faq_log
      },
      {
        path: '/FAQ/aithseis',
        name: 'aithseis',
        component: Aithseis
      },
      
    ]
  },
  {
    path: '/thank-you-for-contacting-us',
    name: 'thank-you-for-contacting-us',
    component: Thankyou_page
  },
  {
    path: '/user-profile',
    redirect: '/user-profile/personal-info',
    name: 'UserProfile',
    component: UserProfile,
    children:[
      {
        path: '/user-profile/personal-info',
        name: 'personal-info',
        component: UserPersonal
      },
      {
        path: '/user-profile/oi-aithseis-mou',
        name: 'oi-aithseis-mou',
        component: MyAithseis
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
