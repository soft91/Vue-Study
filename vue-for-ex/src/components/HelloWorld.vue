<template>
  <div class="hello">
    <ul v-for="item in 5" :key ="item.id">
      <li>Item의 값 : {{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;  
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
