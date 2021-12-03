import { createStore } from 'vuex';

export default createStore({
  state: {
    calc: 'asd',
    result: 'dsa',
  },
  /* eslint-disable */
  mutations: {
    resetCalc: (state) => state.calc = '',
    setCalc: (state, payload) => state.calc += payload,
    setResult: (state, payload) => state.result += payload,
  },
  /* eslint-enable */
});
