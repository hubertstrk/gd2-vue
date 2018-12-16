<template>
  <el-container class="container">
    <Menu class="menu"></Menu>
    <!-- <Search class="search"></Search> -->
  </el-container>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<style>
.container {display: flex; flex-direction: column;}
.menu, .search {width: 100%; height: 100%;}
</style>
