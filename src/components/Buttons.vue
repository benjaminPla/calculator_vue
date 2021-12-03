<template>
  <button @click.prevent='calc' :class='data.type === "calc" && "calc"'>
    {{ data.value }}
  </button>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'Buttons',
  props: ['data'],
  setup(props) {
    const store = useStore();
    /* eslint-disable */
    const calc = () => {
      if (props.data.value === 'AC') {
        store.commit('reset');
      } else if (props.data.value === '=') {
        store.commit('setResult');
      } else {
        store.commit('setCalc', props.data.value);
      };
    };
    /* eslint-enable */
    return { calc };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

button {
  border: 5px solid #000;
  border-radius: 10px;
  height: 40px;
  background: linear-gradient(to left, #fff 90%, #eee 10%);
  font-family: 'Fuzzy Bubbles', cursive;
  font-weight: 700;
  font-size: 1.4rem;
  transition: 0.2s;
}
button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.calc {
  background: linear-gradient(to left, $yellow 90%, #eee 10%);
}
</style>
