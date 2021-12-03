<template>
  <div class='app'>
    <keyboard />
  </div>
</template>

<script>
import Keyboard from './components/Keyboard.vue';

export default {
  name: 'App',
  components: { Keyboard },
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
