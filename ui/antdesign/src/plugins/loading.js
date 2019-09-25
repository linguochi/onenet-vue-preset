// 这个ui框架暂未提供全局静态loading
let loadingComponent = {};
export default {
  show() {
    loadingComponent = window.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
  },
  hide() {
    loadingComponent.close();
  },
};
