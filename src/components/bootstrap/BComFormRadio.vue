<template>
  <b-form-group label="">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      name="radio-options"
      @change="changeValue"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'BComFormRadio',
  props: {
    options: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data(){
    return{
      selected: this.value
    }
  },
  mounted() {},
  methods: {
    changeValue() {
      this.$emit('return', this.selected)
    },
  }
}
</script>
