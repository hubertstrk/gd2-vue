<template>
  <div class="result">
    <TweenBadge :color="color" :value="this.result.length">
      <div class="title">Search</div>
    </TweenBadge>
    <el-input class="input" v-model="input" placeholder="Search">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TweenBadge from './TweenBadge'

export default {
  name: 'Search',
  components: {
    TweenBadge
  },
  computed: {
    ...mapState({
      result: state => state.result,
      translations: state => state.translations
    }),
    input: {
      get () { return this.$store.state.input },
      set (value) { this.setInput(value) }
    },
    color () {
      if (this.result.length === 0) return 'danger'
      else if (this.result.length < 10) return 'success'
      else if (this.result.length < 50) return 'primary'
      else if (this.result.length < 200) return 'warning'
      else return 'danger'
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
