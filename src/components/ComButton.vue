<template>
  <v-btn
    :color="color"
  >{{ label }}</v-btn>
</template>

<script>
export default {
  name: 'ComTextField',
  props: {
    color: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data(){
    return{}
  },
  mounted() {},
  methods: {}
}
</script>
