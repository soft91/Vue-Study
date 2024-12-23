<template>
  <div id="app">
    <h1> {{ msg }} </h1>
    <HelloWorld v-on:emitTest="changeMessageTest"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg : '메세지를 변경해 봅시다!!'
    }
  },
  methods: {
    changeMessageTest: function() {
      this.msg = '메세지가 변경 되었습니다!!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
