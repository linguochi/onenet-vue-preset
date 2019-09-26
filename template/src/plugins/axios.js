import HttpRequest from '../libs/axios';
import config from '../config';

const axiosConfig = config.axios;
const baseUrl = process.env.NODE_ENV === 'development' ? axiosConfig.baseUrl.dev : axiosConfig.baseUrl.pro;

const axios = new HttpRequest(baseUrl);
const _axios = axios.request(axiosConfig);


export default {
  install: (Vue, options) => {
    Vue.axios = _axios;
    window.axios = _axios;
    window.$axios = _axios;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return _axios;
        },
      },
      $axios: {
        get() {
          return _axios;
        },
      },
    });
  },
};
