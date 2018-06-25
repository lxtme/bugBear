import axios from 'axios';

let request = axios;

request.defaults.baseURL = "http://api-thinbug.letsgo.tech";
request.interceptors.response.use((response) => {
    // 请求结束，蓝色过渡滚动条消失
    console.log('kkkkkkkkk', response);
    return response;
}, (error) => {
    // 请求结束，蓝色过渡滚动条消失
    // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
    console.log("error response", error.response)
    console.log("1111111", error)
    console.log("error", error)
    return Promise.reject(error);
    // return error.response
});

export default request;
