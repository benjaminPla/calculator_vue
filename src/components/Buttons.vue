<template>
  <button @click.prevent='calc'>{{ data }}</button>
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
      props.data === 'AC'
        ? store.commit('reset')
        : store.commit('setCalc', props.data);
    };
    /* eslint-enable */
    return { calc };
  },
};
</script>
