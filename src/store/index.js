import { createStore } from 'vuex';

export default createStore({
  state: {
    calc: '',
    result: '',
  },
  /* eslint-disable */
  mutations: {
    reset: (state) => {
      state.calc = '';
      state.result = '';
    },
    setCalc: (state, payload) => state.calc += payload,
    setResult: (state) => state.result = eval(state.calc),
  },
  /* eslint-enable */
});
