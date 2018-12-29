<template>
  <Page>
    <el-button @click="$router.push('/')" type="text">Back to Dictionary</el-button>
    <h1>About</h1>
    <h3>Geodetic Dictionary</h3>
    <h4>Hubert Stärk</h4>
    <h4>Aussichtsweg 21</h4>
    <h4>93138 Lappersdorf</h4>
    <h3>Contact</h3>
    <h4>hubert.staerk@gmail.com</h4>
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
