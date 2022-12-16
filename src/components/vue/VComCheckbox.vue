<template>
  <b-row class="text-center">
    <template v-for="item in items" :key="item.value">
      <b-col>
        <v-checkbox
          v-model="checkedValues"
          :label="item.title"
          :value="item.value"
          @change="updateCheckValues"
        />
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: 'VComCheckbox',
  props: {
    value: {
      type: Array,
      default: null,
    },
    code: {
      type: String,
      default: '',
    },
    items: {
      type: Object,
      default: null,
    },
    itemSelected: {
      type: Array,
      default: null,
    }
  },
  data(){
    return{
      checkedValues: this.itemSelected,
    }
  },
  mounted() {
    console.log('VComCheckbox')
  },
  methods: {
    updateCheckValues() {
      this.$emit('return', this.checkedValues)
    }
  }
}
</script>
