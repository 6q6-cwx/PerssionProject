import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/index.css'
// import { } from '@/assets/js/utils'
// import { getMenu } from '../src/server/api'


// await getMenu().then(res=>{
//   console.log(res,'res')
// })

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
