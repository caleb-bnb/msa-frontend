<template>
    <b-table
      :items="items"
      :fields="fields"
      head-variant="light"
      foot-variant="light"
      bordered
      striped
    ></b-table>
</template>

<script>
export default {
  name: 'ComTextField',
  props: {
    fields: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: null,
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
