import axios  from "axios";

const httpServe=axios.create({
    baseURL:'http://localhost:3000',
    timeout: 10000,
})

httpServe.getMoke=(url)=>{
    return new Promise((resolve,reject)=>{
      axios.get(url).then((res)=>{
        console.log(res,'res')
        resolve(res)
      }).catch(()=>{
        reject(new Error('Faile request'))
      })
    })
}

httpServe.interceptors.request.use((config) => {
    // 在这里可以对请求进行预处理
    // 例如添加请求头
    // config.headers.Authorization = 'Bearer ' + token;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  httpServe.interceptors.response.use(
    (response) => {
      const { data } = response
      console.log(response,'response')
      if (response.data.code !== 0) {
        console.error('请求失败：', response.data.message);
      }
      return {
        data
      };
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  httpServe.getMethod = ({url,data,params},config)=> {
    const param={
      url: url,
      method: 'post',
      params: params,
      data: data,
      ...config
    }
    if(process.env.NODE_ENV === 'development'){
      httpServe.getMoke(url,data)
      return
    }
    return new Promise((resolve,reject)=>{
      httpServe.get(param).then(res=>{
        resolve(res)
      }).catch((e)=>{
        reject(e)
      })
    })
  };

  httpServe.postMethod = ({url,data},config)=> {
    const param={
      url: url,
      data: data,
      ...config
    }
    return new Promise((resolve,reject)=>{
      httpServe.post(param.url,param).then(res=>{
        resolve(res)
      }).catch((e)=>{
        reject(e)
      })
    })
  };
  //请求二进制流文件 
  httpServe.getStream = ({url,data,params},config)=> {
    const param={
      url: url,
      method: 'post',
      // Accept 告诉服务器，客户端能够接收哪些类型的响应数据（告诉服务器期望数据类型）
      // Content-Type 告诉服务器或客户端——发送的数据的类型(请求头，响应头中能看到请求响应的数据类型)
      // responseType  期望服务器如何返回响应数据 (期望如何接收响应数据)
      headers: {'Accept': 'application/octet-stream','responseType':'blob'},//设置不固定 
      params: params,
      data: data,
      ...config
    }
    return new Promise((resolve,reject)=>{
      httpServe.post(param).then(res=>{
        let blob = res.data;
        const file = window.URL.createObjectURL(blob);
        resolve(file);
        window.URL.revokeObjectURL(blob);
      }).catch((e)=>{
        reject(e)
      })
    })
  };

  // httpServe.postMethod({url:'/base'})

  // httpServe.getMoke('user/baseInfo')

  export default httpServe
