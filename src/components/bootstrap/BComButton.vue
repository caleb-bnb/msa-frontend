<template>
  <b-button
    :variant="variant"
  >{{ this.label }}</b-button>
</template>

<script>
export default {
  name: 'BComTables',
  props: {
    variant: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data(){
    return{}
  },
  mounted() {
    console.log('BComButton')
  },
  methods: {
  }
}
</script>
