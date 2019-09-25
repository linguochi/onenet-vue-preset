import * as types from '../mutation-types';

export default {
  state: {
    app: {
      demo: ''
    }
  },
  getters: {
    appDemo: state => state.app.demo
  },
  actions: {
    changeAppDemo({ commit }, payload) {
      commit(types.MUTATION_DEMO, payload);
    },
  },
  mutations: {
    [types.MUTATION_DEMO](state, payload) {
      state.app.demo = payload.demo;
    }
  },
};
