<template>
  <v-app>
    <v-content>
      <Input />
      <List />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from '@/components/Input.vue';
import List from '@/components/List.vue';

@Component({ 
  components: { Input, List }
})
export default class App extends Vue {

}
</script>
