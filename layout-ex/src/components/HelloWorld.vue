<template>
  <el-container class="wrap">
    <el-header class="header">Header</el-header>
      <el-container class="main-wrap">
        <el-aside class="aside">Aside</el-aside>
        <el-main class="main">main</el-main>
      </el-container>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100px !important;
  background: red;
}

.wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.aside {
  background: yellow;
  width: 300px;
}

.main {
  background: blue;
  width: 100%;
}

.footer {
  height: 100px !important;
  background: green;
}
</style>
