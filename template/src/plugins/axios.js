import HttpRequest from '@/libs/axios';
import config from '@/config';

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);
const _axios = axios.request;


export default {
  install: (Vue, options) => {
    Vue.axios = _axios;
    window.axios = _axios;
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
