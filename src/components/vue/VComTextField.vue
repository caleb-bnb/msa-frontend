<template>
  <v-text-field
    :id="id"
    type="input"
    :append-inner-icon="appendInnerIcon"
  />
</template>

<script>
export default {
  name: 'VComTextField',
  props: {
    id: {
      type: String,
      default: '',
    },
    isAppendInnerIcon: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      appendInnerIcon: '',
    }
  },
  mounted() {
    if(this.isAppendInnerIcon) {
      this.appendInnerIcon = "mdi-magnify"
    }
  },
  methods: {}
}
</script>
