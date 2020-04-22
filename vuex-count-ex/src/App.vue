<template>
  <v-container>
    <p> {{ initCount }} </p>
    <Count />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Count from './components/Count.vue';

@Component({
  components: {
    Count
  }
})
export default class App extends Vue {
  get initCount() {
    return this.$store.state.count;
  }
}
</script>
