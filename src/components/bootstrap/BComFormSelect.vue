<template>
  <b-form-select    
  
    :options="thisOptions"
  ></b-form-select>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'BComFormSelect',
  props: {
    options: {
      type: Object,
      default: null,
    },
    addBlankName: {
      type: String,
      default: '',
    }   
  },
  data(){
    return{
      thisOptions: [],      
    }
  },
  mounted() {
    // 상단에 빈값의 option 추가
    if(_.isEmpty(this.addBlankName)) {
      this.thisOptions = this.options
    } else {
      this.thisOptions = [ { value: '', text: this.addBlankName }, ...this.options ]
    }
  },
  methods: {}
}
</script>
