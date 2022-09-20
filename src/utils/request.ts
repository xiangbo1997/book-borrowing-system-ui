import axios from 'axios';
import QS from 'qs';


// 设置默认时间
axios.defaults.timeout = 40 * 1000;

// 设置默认头部
axios.defaults.headers['Content-Type'] = 'application/json';

// 错误 callback
const err = (error:any) => {
  if (error && error.response) {
    if (error.response.status === 403) {
      // TODO...
    }

    // 未登录状态
    if (error.response.status === 401) {
      // TODO...
      // store.dispatch("login/Logout");
    }

    if(error.response.status === 407) {
      // window.location = `${window.location.origin}/407`;
    }
  }

  return Promise.reject(error);
}

// 请求拦截器
axios.interceptors.request.use((config) => {
  // const TOKEN = storageGet("token");
  // if ( TOKEN && config.isAuthorization !== false && !config.headers.Authorization ) {
  //   // eslint-disable-next-line no-param-reassign
  //   config.headers.Authorization = TOKEN;
  // }

  return config;
}, err);

// 响应拦截器
axios.interceptors.response.use((response) => {
  const codes = [401, 404, 403, 407];
  if( codes.includes(Number(response.data.code)) ) {
    err({ response: { status: Number(response.data.code) } })
  }
  return response.data
}, err);

export const post = (url:string, params:object, config:object) => {
  const data = (config && config.headers['content-type'] === 'application/x-www-form-urlencoded') ? QS.stringify(params) : params;
  return axios.post(url, data, { ...config })
}

export const get = (url:string, params:object, config = {}) => axios.get(url, { params, ...config } )

