import Vue from 'vue'
import Vuex from 'vuex'
import Fuse from 'fuse.js'

import db from './db/db.txt'

Vue.use(Vuex)

var baseOptions = {
  shouldSort: true,
  location: 0,
  maxPatternLength: 8,
  includeScore: true,
  includeMatches: true
}

export default new Vuex.Store({
  state: {
    translations: [],
    result: [],
    language: 'german',
    type: 'fuzzy',
    input: ''
  },
  mutations: {
    addTranslations (state, translations) {
      state.translations = translations
    },
    setInput (state, input) {
      state.input = input
    },
    setResult (state, result) {
      state.result = result
    },
    setType (state, type) {
      state.type = type
    },
    setLanguage (state, language) {
      state.result = null
      state.input = ''
      state.language = language
    }
  },
  actions: {
    initTranslations ({ commit }) {
      const translations = db.split('\n').reduce((acc, curr, i) => {
        var parts = curr.split(';')
        acc.push({ id: i, german: parts[0], english: parts[1] })
        return acc
      }, [])
      commit('addTranslations', translations)
    },
    findTranslations ({ state, commit }) {
      var options = {
        location: 0,
        keys: [state.language],
        threshold: state.type === 'precise' ? 0.0 : 0.2,
        distance: state.type === 'precise' ? 0 : 100
      }
      const fuseOptions = Object.assign(baseOptions, options)
      var fuse = new Fuse(state.translations, fuseOptions)
      console.info(fuseOptions)
      const result = fuse.search(state.input)
      commit('setResult', result)
    },
    setType ({ commit, dispatch }, type) {
      commit('setType', type)
      dispatch('findTranslations')
    },
    setInput ({ commit, dispatch }, input) {
      commit('setInput', input)
      dispatch('findTranslations')
    }
  }
})
