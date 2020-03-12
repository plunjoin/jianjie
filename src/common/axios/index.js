import Vue from 'vue'
import axios from 'axios'

axios.defaults.timeout = 50000;
axios.defaults.baseURL = '/jiezi';
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = axios;

axios.interceptors.request.use(
    config => {
        console.log(config);
        return config
    },
    error => {
        console.log(error)
        alert(error)
        return Promise.resolve(error)
    }
)

axios.interceptors.response.use(
    data => {
        return data
    },
    error => {

        console.log(error.response)
        if (error.response.status == 401 || error.response.status == 400) {


        } else if (error.response.status == 500) {
            alert('服务器错误,请稍后重试')
        } else if (error.response.status == 404) {
            alert('404')
        } else if (error.response.status == 403) {
            alert('403')
        } else {
            alert('未知错误')
        }
        return Promise.resolve(error.response)
    }
)

export const $axios = axios.create({ // 这里是配置项
    timeout: 7000,
})