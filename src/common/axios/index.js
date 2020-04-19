import Vue from 'vue'
import axios from 'axios'

axios.defaults.timeout = 50000;
axios.defaults.baseURL = '/jiezi';
// axios.defaults.baseURL = 'https://www.jianjie-china.com';
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = axios;

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.resolve(error)
    }
)

axios.interceptors.response.use(
    data => {
        console.log(data);
        
        if (data.status == 200)
            return data.data
        else
            return {}
    },
    error => {
        console.log(error);
        
        if (error.response.status == 401 || error.response.status == 400) {

        } else if (error.response.status == 500) {
            // alert('服务器错误,请稍后重试')
        } else if (error.response.status == 404) {
        } else if (error.response.status == 403) {
        } else {
        }
        return Promise.resolve(error.response)
    }
)

export const $axios = axios.create({ // 这里是配置项
    timeout: 7000,
})