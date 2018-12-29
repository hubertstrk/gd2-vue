<template>
  <div class="menu">
    <div class="menu-left">
      <el-radio v-model="language" label="german">German</el-radio>
      <el-radio v-model="language" label="english">English</el-radio>
    </div>
    <div class="menu-right">
      <el-button @click="$router.push('/about')" type="text">About</el-button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Menu',
  data () {
    return {
      value1: 0
    }
  },
  computed: {
    ...mapState({
      selectedLanguage: state => state.language,
      selectedType: state => state.type
    }),
    language: {
      get () { return this.selectedLanguage },
      set (value) { this.$store.commit('setLanguage', value) }
    },
    type: {
      get () { return this.selectedType },
      set (value) { this.$store.dispatch('setType', value) }
    }
  },
  methods: {
    formatAccuracy () {
      return 'foo'
    }
  }
}
</script>

<style lang="css" scoped>
.accuracy {
  width: 400px;
  display: flex;
}
.menu-left {
  display: flex;
}
.menu-right > * {
  margin: 0 0 0 40px;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
