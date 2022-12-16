<template>
  <b-row class="text-center">
    <template v-for="item in items" :key="item.value">
      <b-col>
        <v-checkbox
          v-model="checkedValues"
          :label="item.title"
          :value="item.value"
          @input="updateCheckValues"
        />
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: 'ComCheckbox',
  props: {
    id: {
      type: String,
      default: '',
    },
    values: {
      type : Array,
      default: null,
    },
    items: {
      type: Object,
      default: null,
    },
  },
  data(){
    return{
      checkedValues: this.values,
    }
  },
  mounted() {
    console.log(this.checkedValues)
  },
  methods: {
    updateCheckValues() {
      this.$emit('return', this.checkedValues)
    }
  }
}
</script>
