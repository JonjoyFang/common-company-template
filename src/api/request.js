import axios from "axios";

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: "http://47.119.135.4", // 基础 URL
  timeout: 10000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token 到请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么，例如处理错误码
    if (response.status === 1) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    // 对响应错误做点什么，例如处理 401 错误
    if (error.response && error.response.status === 401) {
      // 重定向到登录页面或做其他处理
      console.error("未授权，请登录");
    }
    return Promise.reject(error);
  }
);

// 封装 get 请求
export const get = (url, params) => {
  return instance.get(url, { params });
};

// 封装 post 请求（可根据需要添加更多的请求方法）
export const post = (url, data) => {
  return instance.post(url, data);
};
