<template>
  <el-container class="container">
    <div class="content">
      <slot />
    </div>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.container, .content {
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  width: 100%;
  max-width: 800px;
  align-self: center;
}
</style>
