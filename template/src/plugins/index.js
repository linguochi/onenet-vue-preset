import Vue from 'vue';
import axios from './axios';

Object.defineProperties(Vue.prototype, {
  $http: {
    get(url, params, isLoading = false) {
      isLoading = isLoading || false;
      isLoading && loading.show();
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url,
          params
        })
        .then(res => {
          isLoading && loading.hide();
          resolve(res.data);
        })
        .catch(err => {
          isLoading && loading.hide();
          reject(err.data);
        });
      });
    },
    post(url, data, isLoading = false) {
      isLoading = isLoading || false;
      isLoading && loading.show();
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url,
          data
        })
        .then(res => {
          isLoading && loading.hide();
          resolve(res.data);
        })
        .catch(err => {
          isLoading && loading.hide();
          reject(err.data);
        });
      });
    }
  }
});
