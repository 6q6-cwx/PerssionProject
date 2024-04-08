import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/index.css'
import './moke/globaldata'
import './server/api'


console.log(process.env.NODE_ENV,'env')

Vue.config.productionTip = false


Vue.use(ElementUI);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
