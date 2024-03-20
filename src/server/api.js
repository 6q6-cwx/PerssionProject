import axios  from "axios";

axios.create({
    baseURL:' http://localhost',
})
axios.interceptors.response.use((response) =>response
, (error) => {
    // let url = window.location.href;
    // if(url.indexOf('http://localhost')!==-1){
    //   return
    // }
    // if (error.response && error.response.status === 401) {
    //   location.assign(error.response.data.data)
    // } else {
    //   Message({
    //     message: error.response.data.errmsg,
    //     type: 'error'
    //   })
    // }
    // return Promise.reject(error);
  }
);
axios.interceptors.require.use((response) =>response
, (error) => {
    // let url = window.location.href;
    // if(url.indexOf('http://localhost')!==-1){
    //   return
    // }
    // if (error.response && error.response.status === 401) {
    //   location.assign(error.response.data.data)
    // } else {
    //   Message({
    //     message: error.response.data.errmsg,
    //     type: 'error'
    //   })
    // }
    // return Promise.reject(error);
  }
);
export const post = (params,url) => {
    //    const param={
        
    //    }
}