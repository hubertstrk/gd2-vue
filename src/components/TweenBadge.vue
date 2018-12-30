<template>
  <el-badge :type="color" :value="tweeningValue">
    <slot />
  </el-badge>
</template>

<script>
const TWEEN = require('@tweenjs/tween.js')

const animate = (time) => {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

export default {
  props: ['value', 'color'],
  data () {
    return {
      tweeningValue: 0,
      myTween: null
    }
  },
  methods: {
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
    }
  },
  watch: {
    value (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  }
}
</script>

<style scoped lang="css">
</style>
