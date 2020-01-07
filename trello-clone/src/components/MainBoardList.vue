<template>
  <div>
    <div
      v-for="(value, index) in listitem" 
      :key="index"
    >
      <router-link :to="`/board/${value}`">{{ value }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private listitem!: string[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
