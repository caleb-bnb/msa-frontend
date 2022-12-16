<template>
  <b-form-textarea
    :placeholder="placeholder"
    :rows="rows"
    :max-rows="maxRows"
  ></b-form-textarea>
</template>

<script>
export default {
  name: 'BComFormTextarea',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 3,
    },
    maxRows: {
      type: Number,
      default: 6,
    },
  },
  data(){
    return{
    }
  },
  mounted() {},
  methods: {}
}
</script>
