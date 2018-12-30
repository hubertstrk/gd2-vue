import Vue from 'vue'
import Vuex from 'vuex'
import Fuse from 'fuse.js'

import db from './db/db.txt'

Vue.use(Vuex)

var baseOptions = {
  location: 0,
  maxPatternLength: 16,
  shouldSort: true,
  includeScore: true,
  includeMatches: true
}

export default new Vuex.Store({
  state: {
    translations: [],
    result: [],
    language: 'german',
    accuracy: 30,
    input: ''
  },
  mutations: {
    setTranslations (state, translations) {
      state.translations = translations
    },
    setInput (state, input) {
      state.input = input
    },
    setResult (state, result) {
      state.result = result
    },
    addResult (state, translation) {
      state.result.push(translation)
    },
    setLanguage (state, language) {
      state.result = null
      state.input = ''
      state.language = language
    },
    setAccuracy (state, accuracy) {
      state.accuracy = accuracy
    }
  },
  actions: {
    initTranslations ({ commit }) {
      const translations = db.split('\n').reduce((acc, curr, i) => {
        var parts = curr.split(';')
        acc.push({ id: i, german: parts[0], english: parts[1] })
        return acc
      }, [])
      commit('setTranslations', translations)
    },
    findTranslations ({ state, commit }) {
      var options = {
        keys: [state.language],
        threshold: this.state.accuracy / 100,
        distance: this.state.accuracy,
        position: this.state.accuracy / 10
      }
      const fuseOptions = Object.assign(baseOptions, options)
      var fuse = new Fuse(state.translations, fuseOptions)
      const result = fuse.search(state.input)
      commit('setResult', result)
    },
    setAccuracy ({ commit, dispatch }, accuracy) {
      commit('setAccuracy', accuracy)
      dispatch('findTranslations')
    },
    setInput ({ commit, dispatch }, input) {
      commit('setInput', input)
      commit('setResult', null)
      dispatch('findTranslations')
    }
  }
})
