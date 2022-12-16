<template>
    <b-table
      :id="id"
      :ref="id"
      :items="items"
      :fields="fields"
      head-variant="light"
      foot-variant="light"
      bordered
      :striped="striped"
      :hover="hover"
      :select-mode="selectMode"
      :selectable="selectable"
      @row-clicked="onClickRow"
      @row-dblclicked="onDblClickRow"
    ></b-table>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'BComTables',
  props: {
    id: {
      type: String,
      default: null,
    },
    fields: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    selectMode: {
      type: String,
      default: 'single',
    },
    selectable: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      selectedRowDefault: {
        item: null,
        index: -1,
      },
      selectedRow: {}
    }
  },
  mounted() {
    this.selectedRow = _.cloneDeep(this.selectedRowDefault)
  },
  methods: {
    onClickRow(item, index) {
      // index가 같을 경우는 선택해제임
      if(index == this.selectedRow.index) {
        this.selectedRow = _.cloneDeep(this.selectedRowDefault)
      } else {
        this.selectedRow = {
          item: item,
          index: index
        }
      }

      this.$emit('return', this.selectedRow)
    },
    onDblClickRow(item, index) {
      console.log(item)
      console.log(index)
    },
  }
}
</script>
