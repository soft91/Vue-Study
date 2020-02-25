<template>
  <div class="hello">
    <h2>Option 1</h2> Only one can be selected
    <ul>
      <li 
        v-for="(item, index) in items" 
        :id="item.id" 
        :key="index" 
        :class="{highlight:item.id == selected}" 
        draggable="true" 
        @click="selected = item.id" 
        @dragstart="dragStart()"
      >
        {{item.id}}
      </li>
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
      selected: undefined
    }
  },
  methods:{
    dragStart(){ 
      event.dataTransfer.setData("text/html", event.target.id);
    },
    drag(){
    },
    dragOver(){
      event.preventDefault();
    },
    drop(){
      event.preventDefault();
      const data = event.dataTransfer.getData("text/html");
      const nodeCopy = document.getElementById(data).cloneNode(true);
      nodeCopy.id = "newId";
      event.target.appendChild(nodeCopy);
    }
  }
}
</script>

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
