<template>
  <div id="nav">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
    components: {
      Header
    }
})
</script>
<style scoped>
body{
  margin: 0px;
  padding: 0px;
}
#nav {
  text-align: center;
}

a {
  vertical-align: middle;
}
</style>