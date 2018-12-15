<template>
  <div>
    <Menu></Menu>
    <Search></Search>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    Menu,
    Search
  }
}
</script>
