import Vue from "vue";
import iView from "ui/iview/src/plugins/iview";
import "../style/iview.less";

Vue.use(iView);
window.$loading = Vue.$Spin
