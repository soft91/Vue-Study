<template>
  <div class="home">
    <BoardList class = "list" v-show="listshow" v-bind:listitem = "listitems"/>
    <el-button v-on:click = "openDialog">Create new Board</el-button>
    <el-dialog title="" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-input v-model="form.name" @keyup.enter = "createBoard" autocomplete="off" placeholder="Add Board title"></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createBoard">Create Board</el-button>
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import BoardList from '@/components/BoardList.vue';

export default {
  name: 'MainBoard',
  data(){
    return {
      listshow : true,
      dialogFormVisible: false,
      listitems : [],
      form: {
        name: ''
      }
    }
  },
  components: {
    BoardList,
  },
  created(){
    // 앱이 초기화 할 때 LocalStroge에 저장되어 있는 값들을 리스트 배열안에 추가하여 값을 뿌려줌.

    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.listitems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    openDialog() {
      this.dialogFormVisible = true;
    },
    createBoard() {
      localStorage.setItem(this.form.name, this.form.name);
      this.listitems.push(this.form.name);
      
      document.getElementsByTagName('input')[0].value = '';
      this.dialogFormVisible = false;
    }
  }
}
</script>

<style scoped>
.home {
  padding: 8px;
}
</style>
