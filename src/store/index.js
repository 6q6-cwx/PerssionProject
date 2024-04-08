import Vue from 'vue'
import Vuex from 'vuex'
import {   menu } from './modules'
// import { MenuList } from './commit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    global:{
      namespaced: true,
      state: () => ({ 
        globalLoading:false,
       }),
      actions: {
        login () {} 
      },
      // getters:{ },
      mutations: {
        login () {
          console.log('login')
         },
        MenuList(state){
          console.log(state,'state')
          state.globalLoading=true
        },
      },
      // modules: {
      //   // ...global, 
        
      // }
    },
    ...menu 
  }
})

export default store