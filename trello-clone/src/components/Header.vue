<template>
  <div id="nav" class = "header">
    <router-link to="/" class = "main">Main</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style scoped>
.header {
  height: 32px;
  position: relative;
  background: #026aa7;
  overflow: hidden;
  width: 100%;
  padding: 4px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: center;
}

a {
  vertical-align: middle;
}
</style>