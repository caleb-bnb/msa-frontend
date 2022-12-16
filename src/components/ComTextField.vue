<template>
  <v-text-field
    :id="id"
    type="input"
  />
</template>

<script>
export default {
  name: 'ComTextField',
  props: {
    id: {
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
