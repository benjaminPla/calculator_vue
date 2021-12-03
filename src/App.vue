<template>
  <div class='app'>
    <screen />
    <keyboard />
  </div>
</template>

<script>
import Screen from './components/Screen.vue';
import Keyboard from './components/Keyboard.vue';

export default {
  name: 'App',
  components: { Screen, Keyboard },
};
</script>

<style scoped lang="scss">
@import './assets/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.app {
  padding: 0 35%;
}
</style>
