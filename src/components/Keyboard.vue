<template>
  <div class='container'>
    <buttons v-for='(key, index) in keys' :key='index' :data='key'/>
  </div>
</template>

<script>
import Buttons from './Buttons.vue';

export default {
  name: 'Keyboard',
  components: { Buttons },
  setup() {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '=', '+', '-', '*', '/', 'AC'];
    return { keys };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  padding: 5px;
  button {
    border: 5px solid #000;
    border-radius: 10px;
    height: 40px;
    background: linear-gradient(to left, #fff 90%, #eee 10%);
  }
}
</style>
