<template>
  <div class='container'>
    <p>{{ calc }}</p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Screen',
  setup() {
    const store = useStore();
    const calc = computed(() => store.state.calc);
    const result = computed(() => store.state.result);
    return { calc, result };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.container {
  background-color: $green;
  border-radius: 10px;
  border: 5px solid #000;
  height: 60px;
  p {
    text-align: right;
    margin: 0;
    padding: 5px;
  }
}
</style>
