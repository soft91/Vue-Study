<template>
  <div class="about">
    <Test msg = "about page11221" msg2 = "msg2 props"/>
  </div>
</template>

<script >
import Test from '@/components/Test.vue';

export default {
  name : 'about',
  components : {
    Test
  }
}
</script>