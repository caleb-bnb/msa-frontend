<template>
  <v-radio-group
    :inline="inline"
  >
    <template v-for="option in options" :key="option.value">
      <v-radio
        :label="option.label"
        :value="option.value"
        :inline="inline"
      ></v-radio>
    </template>
  </v-radio-group>
</template>

<script>
export default {
  name: 'VComRadio',
  props: {
    options: {
      type: Array,
      default: null,
    },
    /* 
     * 한줄로 보여줄지 여부
     * true/false
     */
    inline: {
      type: Boolean,
      default: false,
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
