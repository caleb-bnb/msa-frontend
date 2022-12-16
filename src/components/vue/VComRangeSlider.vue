<template>
  <v-range-slider
    step="10000000"
    thumb-label="always"
    :min="min"
    :max="max"
    show-ticks="always"
    tick-size="2"
  ></v-range-slider>
</template>

<script>
export default {
  name: 'VComRangeSlider',
  props: {
    min: {
      type: String,
      default: '0',
    },
    max: {
      type: String,
      default: '0',
    },
  },
  data(){
    return{
    }
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>
