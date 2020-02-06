<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  created(){
    // 스토어의 상태 확인
    console.log(this.$store.state.count);
    // 스토어의 상태 변경
    this.$store.commit('increment');
  }
}
</script>

<style>
</style>
