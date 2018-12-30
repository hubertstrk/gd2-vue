<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('initTranslations')
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

body {
  margin: 0 !important;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5px 10px;
}

h1 {
  font-size: 52px;
  font-weight: normal !important;
  margin-block-start: .3em !important;
  margin-block-end: .3em !important;
}
h2 {
  font-size: 45px;
  font-weight: normal !important;
  margin-block-start: .3em !important;
  margin-block-end: .3em !important;
}
h3 {
  font-size: 28px;
  font-weight: normal !important;
  margin-block-start: .3em !important;
  margin-block-end: .3em !important;
}
h4 {
  font-size: 18px;
  font-weight: normal !important;
  margin-block-start: .3em !important;
  margin-block-end: .3em !important;
}
</style>
