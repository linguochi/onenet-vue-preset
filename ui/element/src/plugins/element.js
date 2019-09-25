import Vue from "vue";
import Element from "element-ui";
import '~element-ui/lib/theme-chalk/index.css';
import "../style/element-diy.less";
Vue.use(Element, { size: "small" });
window.$loading = Vue.$loading;
