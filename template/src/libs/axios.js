import axios from 'axios';

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo;
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  };
  console.log(JSON.stringify(info));
  // if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info);
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = (response) => {
  // 如果http状态码正常，则直接返回数据
  if (response) {
    const { status, statusText } = response;
    if ((status >= 200 && status < 300) || status === 304) {
      // 如果不需要除了data之外的数据，可以直接 return response.data
      return response.data;
    }
    return {
      status,
      msg: codeMessage[status] || statusText,
    };
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常',
  };
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
      // return checkStatus(res);
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
