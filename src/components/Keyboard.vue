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
    const keys = [
      { value: 9, type: 'numb' },
      { value: 8, type: 'numb' },
      { value: 7, type: 'numb' },
      { value: '/', type: 'calc' },
      { value: 6, type: 'numb' },
      { value: 5, type: 'numb' },
      { value: 4, type: 'numb' },
      { value: '*', type: 'calc' },
      { value: 3, type: 'numb' },
      { value: 2, type: 'numb' },
      { value: 1, type: 'numb' },
      { value: '-', type: 'calc' },
      { value: 'AC', type: 'calc' },
      { value: 0, type: 'numb' },
      { value: '=', type: 'calc' },
      { value: '+', type: 'calc' },
    ];
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
}
</style>
