<template>
  <Page>
    <el-button @click="$router.push('/')" type="text">Back to Dictionary</el-button>
    <h1>About</h1>
    <h3>Geodetic Dictionary</h3>
    <h4><a href="mailto:kw6yjvbi3cow3c@gmail.com">Hubert Stärk</a></h4>
  </Page>
</template>

<script>

import Page from '@/components/Page'

export default {
  name: 'About',
  components: {
    Page
  }
}
</script>

<style lang="css" scoped>
</style>
