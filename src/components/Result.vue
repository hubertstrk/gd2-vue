<template>
  <div class="result" v-if="pageResult.length">
    <table>
      <transition-group name="list-complete" tag="tbody">
        <tr class="list-complete-item" v-for="(row, i) in pageResult" :key="row.item.id">
          <td>{{page * 10 - 10 + i + 1}}</td>
          <td>{{row.item[firstLanguage]}}</td>
          <td>{{row.item[secondLanguage]}}</td>
        </tr>
      </transition-group>
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
    }
  }
}
</script>

<style lang="css" scoped>
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}
.list-complete-leave-active {
  position: absolute;
  width: 100%;
}
.result {
  max-width: 800px;
  width: 100%;
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

tr:nth-child(even) {
  background-color: #EBEEF5;
}

tr
{
  transition: all .2s ease;
}

tr:hover
{
  color: white;
  background-color: #409EFF;
}

th {
  font-size: 1em;
  font-weight: 400;
}
</style>
