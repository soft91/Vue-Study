<template>
  <div>
    Parent 
    data : {{ parentData }}
    <hr>
    <Input
      name="withham"
      @emitEvent="emitEvent"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Input from '@/components/Home/Input.vue';
@Component({
  components: {Input}
})
export default class Home extends Vue {

  private parentData: string = 'default'; // change this data

  // add emit event
  private emitEvent(parentData: string) {
    this.parentData = parentData;
  }
}
</script>