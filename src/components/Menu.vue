<template>
  <div class="menu">
    <div class="menu-left">
      <el-radio v-model="language" label="german">German</el-radio>
      <el-radio v-model="language" label="english">English</el-radio>
      <div class="slider">
        <span class="slider-label">Extact</span>
        <el-slider :format-tooltip="formatTooltip" :max="60" class="slider-control" v-model="accuracy" :step="1"></el-slider>
        <span>Fuzzy</span>
      </div>
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
  computed: {
    ...mapState({
      selectedLanguage: state => state.language,
      selectedType: state => state.type,
      selectedAccuracy: state => state.accuracy
    }),
    language: {
      get () { return this.selectedLanguage },
      set (value) { this.$store.commit('setLanguage', value) }
    },
    type: {
      get () { return this.selectedType },
      set (value) { this.$store.dispatch('setType', value) }
    },
    accuracy: {
      get () { return this.selectedAccuracy },
      set (value) { this.$store.dispatch('setAccuracy', value) }
    }
  },
  methods: {
    formatTooltip (value) {
      if (value === 0) return `${value}: Exact`
      if (value < 20) return `${value}: Fairly`
      else if (value < 40) return `${value}: Moderate`
      else return `${value}: Fuzzy`
    }
  }
}
</script>

<style lang="css" scoped>
.slider {
  display: flex;
  align-items: center;
  margin: 0 0 0 40px;
}

.slider span {
  margin: 0 20px;
  font-size: .9em;
}
.slider .slider-control {
  width: 200px;
}

.menu-left {
  display: flex;
  align-items: center;
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
