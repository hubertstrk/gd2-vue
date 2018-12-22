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
    Menu,
    Search,
    Result
  }
}
</script>

<style scoped lang="css">
.container, .content {
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
}

.content {
  align-self: center;
  max-width: 800px;
  width: 100%;
}
</style>
