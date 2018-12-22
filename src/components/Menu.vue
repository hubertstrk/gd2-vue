<template>
  <div class="menu">
    <div>
      <el-switch v-model="language" active-value="german" inactive-value="english" active-text="German" inactive-text="English"></el-switch>
      <!-- <el-switch v-model="type" active-value="precise" inactive-value="fuzzy" active-text="Precise" inactive-text="Fuzzy"></el-switch> -->
    </div>
    <div>
      <div>About</div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Menu',
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
  }
}
</script>

<style lang="css" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
