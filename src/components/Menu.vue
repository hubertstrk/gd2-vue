<template>
  <div class="menu">
    <div class="menu-options">
      <h1>Options</h1>
      <el-switch v-model="language" active-text="German" inactive-text="English"></el-switch>
      <el-switch v-model="type" active-text="Fuzzy" inactive-text="Precise"></el-switch>
      <el-badge type="primary" :value="3679" class="item">
        <el-button type="text">Translations</el-button>
      </el-badge>
     <el-button type="text">About</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      language: false,
      type: false
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
.menu {display: flex; align-items: center; justify-content: space-between;}
.menu-options > * {margin: 0 10px;}
</style>
