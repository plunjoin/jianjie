import Vue from 'vue';
import Axios from 'axios';

Vue.prototype.axios = Axios;
Axios.defaults.baseURL = '/proxy';
Axios.defaults.headers.post['contentType'] = 'application/json';

export const axios;