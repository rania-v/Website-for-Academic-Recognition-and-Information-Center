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
import Dikaiologhtika from '../components/Dikaiologhtika.vue'
import Logariasmos from '../components/Logariasmos.vue'
import Anagnwrish from '../views/Anagnwrish.vue'
import AnEr1 from '../components/AnEr1.vue'
import AnEr2 from '../components/AnEr2.vue'
import AnEr3 from '../components/AnEr3.vue'
import Admin from '../views/Admin.vue'
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
    path: '/Anagnwrish',
    redirect: '/Anagnwrish/erothsh1',
    name: 'Anagnwrish',
    component: Anagnwrish,
    children: [
      {
        path: '/Anagnwrish/erothsh1',
        name: 'AnEr1',
        component: AnEr1
      },
      {
        path: '/Anagnwrish/erothsh2',
        name: 'AnEr2',
        component: AnEr2
      },
      {
        path: '/Anagnwrish/erothsh3',
        name: 'AnEr3',
        component: AnEr3
      }
      
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
        component: UserPersonal,
        props: {edit: true}
      },
      {
        path: '/user-profile/oi-aithseis-mou',
        name: 'oi-aithseis-mou',
        component: MyAithseis,
      },
      {
        path: '/user-profile/ta-dikaiologhtika-mou',
        name: 'ta-dikaiologhtika-mou',
        component: Dikaiologhtika
      },
      {
        path: '/user-profile/logariasmos',
        name: 'logariasmos',
        component: Logariasmos
      },
      {
        path: '/admin',
        name: 'Admin',
        component: Admin
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
