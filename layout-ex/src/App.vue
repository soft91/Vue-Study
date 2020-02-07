<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
