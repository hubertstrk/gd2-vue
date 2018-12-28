<template>
  <div id="app">
    <router-view />
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
body {
  margin: 0 !important;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}

h1 {
  font-size: 60px;
  margin-block-start: 0.3em !important;
  margin-block-end: 0.3em !important;
}
h2 {
  font-size: 45px;
  margin-block-start: 0.25em !important;
  margin-block-end: 0.25em !important;
}
h3 {
  font-size: 38px;
  margin-block-start: 0.2em !important;
  margin-block-end: 0.2em !important;
}

</style>
