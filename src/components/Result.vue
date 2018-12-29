<template>
  <div class="result" v-if="pageResult.length">
    <el-alert class="result-message" v-if="result && result.length > 100"
      title=" The query led to a high number of results. To receive a clearer result narrow your search expression."
      type="warning">
    </el-alert>
    <table>
      <tr v-for="(row, i) in pageResult" :key="row.item.id">
        <td>{{page * 10 - 10 + i + 1}}</td>
        <td>{{row.item[firstLanguage]}}</td>
        <td>{{row.item[secondLanguage]}}</td>
        <td style="width: 200px;">
          <el-progress :color="score(row).color" :percentage="score(row).percentage"></el-progress>
        </td>
      </tr>
    </table>
    <div class="pagination">
      <div>Showing {{page * 10 - 10 + 1}} to {{page * 10}} of {{result.length}}</div>
      <el-pagination layout="prev, pager, next" :total="this.result.length"
        @prev-click="change" @next-click="change" @current-change="change">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState({
      result: state => state.result,
      language: state => state.language,
      input: state => state.input
    }),
    firstLanguage () { return this.language },
    secondLanguage () { return this.language === 'german' ? 'english' : 'german' },
    pageResult () {
      if (!this.result) return []
      return this.result.slice(this.page * 10 - 10, this.page * 10)
    }
  },
  methods: {
    change (page) {
      this.page = page
    },
    score (row) {
      const percentage = Math.round((1 - row.score) * 100)
      let color = '#67C23A'
      if (percentage < 90) color = '#E6A23C'
      if (percentage < 80) color = '#409EFF'
      if (percentage < 70) color = '#F56C6C'
      if (percentage < 60) color = '#909399'
      return { percentage, color }
    }
  }
}
</script>

<style lang="css" scoped>
.result {
  max-width: 800px;
  width: 100%;
}

.result-message {
  margin: 0 0 8px 0;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0 0 0;
  color: #409EFF;
}

table {
  border-collapse: collapse;
  max-width: 800px;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 16px 6px;
}

/* tr:nth-child(even) {
  background-color: #EBEEF5;
} */

tr
{
  transition: all .4s linear;
}

tr:hover
{
  /* color: white; */
  background-color: #C0C4CC;
}

th {
  font-size: 1em;
  font-weight: 400;
}
</style>
