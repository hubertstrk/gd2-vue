<template>
  <div class="result">
    <el-badge :value="translations.length" class="item">
      <div class="title">Search</div>
    </el-badge>
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
      result: state => state.result,
      translations: state => state.translations
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
.result {
  margin: 10px 0 0 0;
}
.input {
  margin: 0 0 10px 0;
}

.title {
  font-size: 3em;
  margin: 0 0 10px 0;
}
</style>
