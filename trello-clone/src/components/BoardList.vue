<template>
  <div>
    <el-row v-for = "(value, index) in listitem" v-bind:key="index">
      <el-col :span="3">
        <el-card shadow="hover">
          {{ value }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private listitem!: string[];
  constructor(){
    super();

    console.log(this.listitem);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
