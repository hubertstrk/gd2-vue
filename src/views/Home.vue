<template>
  <el-container>
    <div class="container">
      <Menu class="menu"></Menu>
      <div class="content">
        <Search></Search>
        <Result></Result>
      </div>
    </div>
  </el-container>
</template>

<script>
import Menu from '@/components/Menu'
import Search from '@/components/Search'
import Result from '@/components/Result'

export default {
  name: 'Home',
  components: {
    Menu, Search, Result
  }
}
</script>

<style scoped lang="css">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 25% 0 25%;
}
</style>
