import axios  from "axios";

let httpServe=axios.create({
    baseURL:'http://localhost:1024',
    timeout: 10000,
})
httpServe.get('user/base').then(res=>{
    console.log(res,'resssss')
})

console.log(httpServe,'httpServe')


// axios.interceptors.response.use((response) =>response
// , (error) => {
//     // let url = window.location.href;
//     // if(url.indexOf('http://localhost')!==-1){
//     //   return
//     // }
//     // if (error.response && error.response.status === 401) {
//     //   location.assign(error.response.data.data)
//     // } else {
//     //   Message({
//     //     message: error.response.data.errmsg,
//     //     type: 'error'
//     //   })
//     // }
//     // return Promise.reject(error);
//   }
// );
// axios.interceptors.require.use((response) =>response
// , (error) => {
//     // let url = window.location.href;
//     // if(url.indexOf('http://localhost')!==-1){
//     //   return
//     // }
//     // if (error.response && error.response.status === 401) {
//     //   location.assign(error.response.data.data)
//     // } else {
//     //   Message({
//     //     message: error.response.data.errmsg,
//     //     type: 'error'
//     //   })
//     // }
//     // return Promise.reject(error);
//   }
// );
// export const post = (params,url) => {
//     //    const param={
        
//     //    }
// }
// export const get=(param,url)=>{
//   const param={
     
//   }
  
// }

export const httpServ = httpServe