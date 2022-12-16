<template>
  <v-btn
    :color="color"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :disabled="disabled"
  >{{ label }}</v-btn>
</template>

<script>
export default {
  name: 'VComButton',
  props: {
    color: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    prependIcon: {
      type: String,
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{}
  },
  mounted() {},
  methods: {}
}
</script>
