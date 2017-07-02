<template>
<image-slider>
<p>
    <a @click="prev">Previous</a> || <a @click="next">Next</a>
  </p>
  <div
       v-for="number in [currentNumber]"
       transition="fade"
  >
    <img
        :src="images.filter(i => {return i.featured === true})[Math.abs(currentNumber) % images.length].url"
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation"
    />
  </div>
</image-slider>
</template>
<script>
export default {
  name: 'image-list',
  props: ['images'],
  data () {
    return {
      currentNumber: 0,
      timer: null
    }
  },
  ready: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000)
    },

    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },

    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
}
</script>
<style>
.fade-transition {
transition: all 0.8s ease;
overflow: hidden;
visibility: visible;
opacity: 1;
position: absolute;
}
.fade-enter, .fade-leave {
opacity: 0;
visibility: hidden;
}
</style>
