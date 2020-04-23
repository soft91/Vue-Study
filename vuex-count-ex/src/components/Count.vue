<template>
  <v-container>
    <v-btn @click="plus">+</v-btn>
    <v-btn @click="minus">-</v-btn>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class Count extends Vue {
    plus(): void {
      this.$store.dispatch('doPlusCountAction', 'plus');
    }

    minus(): void {
      this.$store.dispatch('doMinusCountAction', 'minus');
    }
  }
</script>
