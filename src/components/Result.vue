<template>
  <table v-if="this.result.length">
    <!-- <tr>
      <th>{{firstLanguageLabel}}</th>
      <th>{{secondLanguageLabel}}</th>
    </tr> -->
    <tr v-for="row in result" :key="row.item.id">
      <td>{{row.item[firstLanguage]}}</td>
      <td>{{row.item[secondLanguage]}}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      result: state => state.result,
      language: state => state.language,
      input: state => state.input
    }),
    firstLanguage () { return this.language },
    secondLanguage () { return this.language === 'german' ? 'english' : 'german' },
    firstLanguageLabel () { return this.language === 'german' ? 'German' : 'English' },
    secondLanguageLabel () { return this.language === 'german' ? 'English' : 'German' }
  }
}
</script>

<style lang="css" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: rgb(243, 243, 243);
}

th {
  font-size: 1em;
  font-weight: 400;
}
</style>
