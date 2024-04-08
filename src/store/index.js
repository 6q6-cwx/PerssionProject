import Vue from 'vue'
import Vuex from 'vuex'
import {  global, menu } from './modules'


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
      getters:{

      },
      mutations: {
        login () { }
      },
      modules: {
        global, 
        menu 
      }
    }
  }
})

export default store