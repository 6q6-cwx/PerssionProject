  
  const state = {
    menuList:[]
  }
  
  // const actions = {
  //   logout() {
  //     logout().then((res) => {
  //       const { success, errmsg } = res.data
  //       const setCookie = (key, val, time) => {
  //         if (typeof key !== 'string' || typeof val !== 'string' ) {
  //             return false;
  //         }
  //         time = time || 7 * 24 * 3600;
  //         var exp = new Date();
  //         exp.setTime(exp.getTime() + time * 1000);
  //         document.cookie = key + '=' + val + ';expires=' + exp.toGMTString();
  //       }
      
  //       const clearCookieByKey = (key) => {
  //         setCookie(key, "", -1);
  //       }
  //       if (success !== true) {
  //         Message({
  //           message: errmsg,
  //           type: 'error'
  //         })
  //         return
  //       }
  
  //       clearCookieByKey('l-token')
  //       window.location.reload()
  //     })
  //   },
  //   getMenu(){
  //   }
  // }
  
  const mutations = {
  }
  
  export default {
    state,
    // actions,
    mutations
  }
  