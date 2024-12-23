<template>
  <div class="hello">
    <button @click="test">Emit Test</button>
  </div>
</template>

<script>
const eventBus = new Vue();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    test: function(){
      eventBus.$emit('emitTest');
    }
  }
}
</script>

<style scoped>
</style>
