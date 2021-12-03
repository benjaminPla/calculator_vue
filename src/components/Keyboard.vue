<template>
  <div class='container'>
    <button v-for='(key, index) in keys' :key='index'>{{ key }}</button>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',
  setup() {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '=', '+', '-', '*', '/'];
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
  background: $red;
  padding: 5px;
  border-radius: 10px;
  border: 5px solid #000;
  button {
    border: 5px solid #000;
    border-radius: 10px;
    height: 40px;
    background: linear-gradient(to left, #fff 90%, #eee 10%);
  }
}
</style>
