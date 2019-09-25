import axios from 'axios';

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo;
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  };
  console.log(JSON.stringify(info))
  // if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info);
};

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    };
  }

  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true;
      return config;
    }, error => {
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url);
      const { data, status } = res;
      return { data, status };
    }, error => {
      this.destroy(url);
      let errorInfo = error.response;
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error));
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        };
      }
      addErrorLog(errorInfo);
      return Promise.reject(error);
    });
  }

  request(options) {
    options = Object.assign(this.getInsideConfig(), options);
    const axiosInstance = axios.create(options);
    this.interceptors(axiosInstance, options.url);
    return axiosInstance;
  }
}

export default HttpRequest;
