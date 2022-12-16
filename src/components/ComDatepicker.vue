<!--
    vue3-datepicker 사용법 : https://www.npmjs.com/package/vue3-datepicker
 -->

<template>
  <div style="border:1px solid #CCCCCC; float:left;">
    <Vue3Datepicker
      v-model="startDate"
      :startingView="startingView"
      :clearable="clearable"
      @update:modelValue="onChange"
    />
  </div>
  <div style="float:left">~</div>
  <div style="border:1px solid #CCCCCC; float:left;" v-if="(mode === 'DD' || mode === 'MM' || mode === 'YY')">
    <Vue3Datepicker
      v-model="endDate"
      :startingView="startingView"
      clearable="clearable"
      @update:modelValue="onChange"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import { ref } from 'vue'
import Vue3Datepicker from 'vue3-datepicker'

export default {
  name: 'ComDatepicker',
  components: {
    Vue3Datepicker,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    /*
     * mode (default: D)
     * - D : YYYY-MM-DD
     * - DD : YYYY-MM-DD ~ YYYY-MM-DD
     * - M : YYYY-MM (현재 지원안됨)
     * - MM : YYYY-MM ~ YYYY-MM (현재 지원안됨)
     * - Y : YYYY (현재 지원안됨)
     * - YY : YYYY ~ YYYY (현재 지원안됨)
     */
    mode: {
      type: String,
      default: 'D',
    },
    startValue: {
      type: String,
      default: null,
    },
    endValue: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      clearable: true,
      startDate: this.getValDateType(this.startValue),
      endDate: this.getValDateType(this.endValue),
      startingView: 'day',
      nowYmd: ref(new Date()),
    }
  },
  mounted() {
    if(this.mode.indexOf('M') != -1) {
      this.startingView = "month";
    } else if(this.mode.indexOf('Y') != -1) {
      this.startingView = "year";
    }

    const nowDate = ref(new Date())
    console.log('new Date() : '+ new Date())
    console.log('nowDate : '+ nowDate.value)
  },
  methods: {
    getValDateType(str) {
      let resultDate = null

      if(!_.isEmpty(str)) {
        let resultJson = {
          YEAR: null,
          MONTH: null,
          DAY: null
        }
        const strArr = str.split("-")
        strArr.map((value, index) => {
            if(index === 0) {
              resultJson.YEAR = value
            } else if(index === 1) {
              resultJson.MONTH = value - 1
            } else if(index === 2) {
              resultJson.DAY = value
            }
        })

        if(this.mode.indexOf('D') != -1) {
          resultDate = ref(new Date(resultJson.YEAR, resultJson.MONTH, resultJson.DAY))
        }
        else if(this.mode.indexOf('M') != -1) {
          resultDate = ref(new Date(resultJson.YEAR, resultJson.MONTH))
        }
        if(this.mode.indexOf('Y') != -1) {
          resultDate = ref(new Date(resultJson.YEAR))
        }
      }

      return resultDate
    },
    getValStringType(date) {
      let result = ''
      if(date) {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()

        result = year +'-'+ String((month < 10) ? '0' + month : month) +'-'+ String((day < 10) ? '0' + day : day)
      }

      return result
    },
    onChange() {
      let startDate = ''
      let endDate = ''

      if(this.startDate) {
        startDate = this.getValStringType(this.startDate)
      }
      if(this.endDate) {
        endDate = this.getValStringType(this.endDate)
      }

      this.$emit('return', [startDate, endDate])
    }
  }
}
</script>
