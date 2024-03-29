import Vue from 'vue';
import Vuex from 'vuex';
import demo from './modules/demo';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { demo },
});
