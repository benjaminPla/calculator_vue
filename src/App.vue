<template>
  <div class='app'>
    <screen />
    <keyboard />
  </div>
  <footer-bar />
</template>

<script>
import Screen from './components/Screen.vue';
import Keyboard from './components/Keyboard.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: { Screen, Keyboard, FooterBar },
};
</script>

<style lang="scss">
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
  margin: 60px 35% 0 35%;
  background: $red;
  padding: 5px;
  border-radius: 10px;
  border: 5px solid #000;
}
</style>
