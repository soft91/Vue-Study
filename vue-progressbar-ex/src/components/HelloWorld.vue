<template>
  <div>
    <el-progress type="dashboard" :percentage="increaseNumber" :color="colors"></el-progress>
    <br>
    <span>{{ message }}</span>
    <br>
    <el-button @click="increase">click</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      increaseNumber: 0,
      message: 'Component Loading...',
      loadingStatus: '',
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
    }
  },
  methods: {
    increase(){
      const increasePercentage = setInterval(() => {
        this.increaseNumber += 1;
        if (this.increaseNumber > 100) {
          this.increaseNumber = 100;
          this.message = "Complete";
          clearInterval(increasePercentage);
        } else if (this.increaseNumber == 35) {
          this.message = 'Resource Loading...';
        } else if (this.increaseNumber == 68) {
          this.message = 'Resource Loading...2';
        } else if (this.increaseNumber == 88) {
          this.message = 'Resource Loading...3';
        }
      }, 100);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
