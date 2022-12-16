<template>
  <v-select
    :id="id"
    v-model="selectedValue"
    :label="label"
    :items="items"
    :item-value="itemValue"
    :item-title="itemTitle"
    return-object
    @update:model-value="$emit('onChange')"
  ></v-select>
</template>

<script>
export default {
  name: 'VComSelect',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    itemTitle: {
      type: String,
      default: 'title',
    },
    // items가 배열인지, Object(json) 형식인지 여부 (default: 배열)
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    selectedValue: null,
  }),
  mounted() {
    console.log('defaultValue='+ this.defaultValue)

      // Default값 세팅
      this.selectedValue = this.defaultValue
  },
  methods: {}
}
</script>
