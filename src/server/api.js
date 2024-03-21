import axios  from "axios";

const httpServe=axios.create({
    baseURL:'http://localhost:1024',
    timeout: 10000,
})


httpServe.interceptors.request.use((config) => {
    // 在这里可以对请求进行预处理
    // 例如添加请求头
    // config.headers.Authorization = 'Bearer ' + token;
    return config;
  }, (error) => {
    // 请求错误处理
    return Promise.reject(error);
  });

  httpServe.interceptors.response.use(
    (response) => {
      // 在这里可以对响应数据进行处理
      // 例如统一处理返回的数据格式
      if (response.data.code !== 0) {
        console.error('请求失败：', response.data.message);
      }
      return response;
    },
    (error) => {
      // 响应错误处理
      return Promise.reject(error);
    }
  );

  httpServe.postMethod = function(url, data) {
    return this.post(url, data);
  };

  export default httpServe



//   httpServe.postMethod('/api/data', { key: 'value' })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
