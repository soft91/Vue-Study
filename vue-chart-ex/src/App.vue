<template>
  <div id="app">
    <button type = "button" class = "btn btn-primary btn-lg">Large Button</button>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'

export default {
  name: 'app',
  data() {
    return {
      msg : 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Chart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
