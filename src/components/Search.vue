<template>
  <div>
    <h2>Search</h2>
    <el-input class="input" v-model="input" placeholder="Search...">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  computed: {
    input: {
      get () { return this.$store.state.input },
      set (value) { this.setInput(value) }
    }
  },
  methods: {
    ...mapActions([
      'setInput'
    ])
  }
}
</script>

<style lang="css" scoped>
.input {
  margin: 0 0 10px 0;
}
</style>
