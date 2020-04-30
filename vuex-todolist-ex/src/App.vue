<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Y Note</v-toolbar-title>
    </v-app-bar>
    <ListComponent />
    <div class="my-2">
      <v-btn color="primary" fab dark @click="openCreateNoteModal">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <CreateNoteModal toggle="openCreateNoteModal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from '@/components/Input.vue';
import ListComponent from '@/components/ListComponent.vue';
import CreateNoteModal from '@/components/CreateNoteModal.vue';

@Component({ 
  components: {
    Input, 
    ListComponent,
    CreateNoteModal 
  }
})
export default class App extends Vue {
  openCreateNoteModal() {
    this.$store.dispatch('toggleCreateNoteModal');
  }
}
</script>
