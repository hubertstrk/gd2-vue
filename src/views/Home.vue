<template>
  <Page>
    <Menu></Menu>
    <Search></Search>
    <Result></Result>
  </Page>
</template>

<script>
import Menu from '@/components/Menu'
import Search from '@/components/Search'
import Result from '@/components/Result'
import Page from '@/components/Page'

export default {
  name: 'Home',
  components: {
    Menu,
    Search,
    Result,
    Page
  }
}
</script>

<style scoped lang="css">
</style>
