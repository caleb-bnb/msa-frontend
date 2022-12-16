<template>
  <b-form-input
    :ref="refs"
    :placeholder="placeholder"
    :readonly="readonly"
  ></b-form-input>
</template>

<script>
export default {
  name: 'BComFormInput',
  props: {
    refs: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
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
