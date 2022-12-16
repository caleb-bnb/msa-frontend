<template>
  <b-modal
    :id="id"
    :title="title"
    size="lg"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div>
      <label>
        <input
          type="checkbox"
          value="all"
          v-model="allSeleted"
        />
        전체
      </label>
    </div>
    <template v-for="item in items" :key="item.value">
      <label>
        <input
          type="checkbox"
          v-model="checkedValues"
          :value="item.value"
        />
        {{item.title}}
      </label>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ComMaemulTypePopup',
  components: {
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      default: null,
    },
    items: {
      type: Object,
      default: null,
    },
    itemSelected: {
      type: Array,
      default: null,
    },
  },
  data () {
    return {
      checkedValues: this.itemSelected,
    }
  },
  mounted() {
    console.log('ComMaemulTypePopup')
  },
  methods: {
    handleOk() {
      this.$emit('return', this.checkedValues)
    },
    handleCancel() {
      this.checkedValues = this.itemSelected;
      this.$emit('return', this.itemSelected)
    },
  },
  computed: {
    allSeleted: {
      get: function() {
        return this.items ? this.checkedValues.length == this.items.length : false;
      },
      set: function(e) {
        let seleted = [];

        if (e) {
          this.items.forEach(function (element) {
            seleted.push(element.value)
          });
          this.checkedValues = seleted
        } else {
          this.checkedValues = [];
        }
      },
    },
  },
}
</script>

<style scoped>
  .b-head {
    font-size: 15px;
    background-color: #EFEFEF;
    border-bottom: 1px solid #CCCCCC;
    border-left: 1px solid #CCCCCC;
    padding: 5px 10px;
  }
  .b-body {
    border-bottom: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    padding: 2px 5px;
  }
  .top-border {
    border-top: 1px solid #CCCCCC;
  }
  .result-json {
    color: #5DA7DB;
  }
</style>