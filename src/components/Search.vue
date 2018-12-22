<template>
  <div class="search">
    <h3>Search</h3>
    <el-input class="input" v-model="input" placeholder="Search">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Search',
  computed: {
    ...mapState({
      result: state => state.result
    }),
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
.result-info {
  font-size: 0.8em;
}

.search {
  max-width: 800px;
  width: 100%;
  margin: 10px 0 0 0;
}

.input {
  margin: 0 0 10px 0;
}
</style>
