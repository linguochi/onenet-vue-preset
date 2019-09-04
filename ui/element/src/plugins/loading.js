let loadingComponent = {};
export default {
  show() {
    loadingComponent = this.$loading({
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
