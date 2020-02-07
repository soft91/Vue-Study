<template>
  <div class="hello">
    <h2>Option 1</h2> Only one can be selected
    <ul>
      <li v-for="(item, index) in items" :key="index" :class="{highlight:item.id == selected}" @click="selected = item.id" draggable="true" @dragstart="dragStart()">{{item.id}}</li>
    </ul>
    <div class="box" droppable="true" @dragover="dragOver()" @drop="drop()"></div>
  </div>
</template>

<script>
var items = []
for (var i = 1; i <= 10; i++) {
  items.push({
    id: i
  })
}

export default {
  name: 'HelloWorld',
  data(){
    return {
      items,
      selected: undefined,
      selected2: []
    }
  },
  methods:{
    dragStart(){ 
      let obj = event.target;
      event.dataTransfer.setDragImage(obj,0,0);
    },
    drag(){
      console.log("drag");
    },
    dragOver(){
      event.preventDefault();
      console.log('dragOver');      
    },
    drop(){
      console.log("drop");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  height: 500px;
  width : 500px;
  border: 1px solid black;
}
ul {
  width: 500px;
}
li:hover {
  color: red;
  cursor: pointer;
}
li.highlight {
  background: yellow;
}

h2 {
  margin-bottom: 0px;
}
</style>
