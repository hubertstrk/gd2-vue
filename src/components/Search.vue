<template>
  <div class="result">
    <el-badge :type="severity()" :value="tweeningValue " class="item">
      <div class="title">Search</div>
    </el-badge>
    <el-input class="input" v-model="input" placeholder="Search">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const TWEEN = require('@tweenjs/tween.js')

const animate = (time) => {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

export default {
  name: 'Search',
  data () {
    return {
      tweeningValue: 0,
      myTween: null
    }
  },
  computed: {
    ...mapState({
      result: state => state.result,
      translations: state => state.translations
    }),
    input: {
      get () { return this.$store.state.input },
      set (value) { this.setInput(value) }
    },
    results () {
      return this.result.length
    }
  },
  methods: {
    ...mapActions([
      'setInput'
    ]),
    tween (start, end) {
      let frameHandler

      const anim = { tweeningValue: start }
      this.myTween = new TWEEN.Tween(anim)
        .to({ tweeningValue: end }, 400)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          this.tweeningValue = Math.round(anim.tweeningValue)
        })
        .onComplete(() => {
          cancelAnimationFrame(frameHandler)
        })
        .start()

      frameHandler = requestAnimationFrame(animate)
    },
    severity () {
      if (this.result.length === 0) return 'danger'
      else if (this.result.length < 10) return 'success'
      else if (this.result.length < 50) return 'primary'
      else if (this.result.length < 200) return 'warning'
      else return 'danger'
    }
  },
  watch: {
    results (newVal, oldVal) {
      this.tween(oldVal, newVal)
    },
    translations () {
      this.tween(0, this.translations.length)
    }
  }
}
</script>

<style lang="css" scoped>
.result {
  margin: 10px 0 0 0;
}
.input {
  margin: 0 0 10px 0;
}
.title {
  font-size: 3em;
  margin: 0 0 10px 0;
}
</style>
