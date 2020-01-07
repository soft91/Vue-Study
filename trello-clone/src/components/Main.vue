<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :span="6">
        <MainBoardList 
          :listitem="listitems"
          class="list"
          @show="listshow"
        />
      </el-col>
      <el-col :span="6">
        <el-button @click="openDialog">
          Create new Board
        </el-button>
      </el-col>
    </el-row>
    <!-- Board를 추가하기 위한 Dialog -->
    <el-dialog 
      :visible.sync="dialogFormVisible"
    >
      <el-input 
        v-model="boardTitle" 
        placeholder="Add Board title" 
        autocomplete="off" 
        @keyup.enter="createBoard"
      />
      <span 
        slot="footer" 
        class="dialog-footer"
      >
        <el-button 
          type="primary"
          @click="createBoard"
        >Create Board
        </el-button>
        <el-button @click="dialogFormVisible=false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import MainBoardList from '@/components/MainBoardList.vue';

export default Vue.extend({
  name: 'MainBoard',
  components: {
    MainBoardList,
  },
  data(){
    return {
      listshow : true,
      dialogFormVisible: false,
      listitems : [],
      boardTitle: ''
    }
  },
  created(){
    // 앱이 초기화 할 때 LocalStroge에 저장되어 있는 값들을 리스트 배열안에 추가하여
    // 등록된 Board들을 메인 페이지에 출력.

    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.listitems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    openDialog() {
      // 메인 페이지에서 Board를 추가하기 위한 Input Dialog를 Open

      this.dialogFormVisible = true;
    },
    createBoard() {
      // 메인 페이지에서 LocalStorage에 Board를 추가하는 이벤트
      
      localStorage.setItem(this.boardTitle, this.boardTitle);
      this.listitems.push(this.boardTitle);
      
      document.getElementsByTagName('input')[0].value = '';
      this.dialogFormVisible = false;
    }
  }
})
</script>
<style scoped>
.home {
  padding: 8px;
}
.list {
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
