import axios from 'axios'
import {authenticated, getAuthenticated} from "@/stores/auth";

// axios 配置 -> import.meta.env.VITE_URL 环境配置
axios.defaults.baseURL = import.meta.env.VITE_URL
axios.defaults.headers.common[authenticated] = getAuthenticated();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axios