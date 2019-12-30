<template>
  <div id = "container" style = "width:100%;height:400px;"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  mounted(){
    Highcharts.chart('container', {
      chart : {
        type : 'bar'
      },
      title : {
        text : 'Fruit Consumption'
      },
      xAxis : {
        categories: ['apple', 'Banana', 'Orange']
      },
      yAxis: {
        title : {
          text : 'Fruit eaten'  
        }
      },
      series: [{
        name: 'Jane',
        data: [1,0,4]
      }, {
        name: 'John',
        data: [5,7,3]
      }]
    });
  }
}
</script>