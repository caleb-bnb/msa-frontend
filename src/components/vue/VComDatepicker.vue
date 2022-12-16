<!--
    vue3-datepicker 사용법 : https://www.npmjs.com/package/vue3-datepicker
 -->

<template>
  <div style="border:1px solid #CCCCCC; float:left;">
    <!-- 시작일 -->
    <Vue3Datepicker
      v-model="startDate"
      :startingView="startingView"
      :clearable="clearable"
      @update:modelValue="onChange"
    />
  </div>
  <template v-if="(mode === 'DD' || mode === 'MM' || mode === 'YY')">
    <!-- 종료일(기간일 경우만 보임) -->
    <div style="float:left">~</div>
    <div style="border:1px solid #CCCCCC; float:left;">
      <Vue3Datepicker
        v-model="endDate"
        :startingView="startingView"
        clearable="clearable"
        @update:modelValue="onChange"
      />
    </div>
    <div style="border:1px solid #CCCCCC; float:left;">
      <!-- 아이콘 영역(금일/1주일/1개월/3개월/6개월/1년) -->
      <v-btn v-if="iconStr.indexOf('-D-') != -1" @click="setDatePeriod('days', 1)">
        금일
      </v-btn>
      <v-btn v-if="iconStr.indexOf('-W-') != -1" @click="setDatePeriod('days', 7)">
        1주일
      </v-btn>
      <v-btn v-if="iconStr.indexOf('-M-') != -1 || iconStr.indexOf('-M1-') != -1" @click="setDatePeriod('months', 1)">
        1개월
      </v-btn>
      <v-btn v-if="iconStr.indexOf('-M3-') != -1" @click="setDatePeriod('months', 3)">
        3개월
      </v-btn>
      <v-btn v-if="iconStr.indexOf('-M6-') != -1" @click="setDatePeriod('months', 6)">
        6개월
      </v-btn>
      <v-btn v-if="iconStr.indexOf('-Y-') != -1" @click="setDatePeriod('years', 1)">
        1년
      </v-btn>
    </div>
  </template>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import { ref } from 'vue'
import Vue3Datepicker from 'vue3-datepicker'

export default {
  name: 'VComDatepicker',
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
    /*
     * icon
     * - D : 금일
     * - W : 1주일
     * - M, M1 : 1개월
     * - M3 : 3개월
     * - M6 : 6개월
     * - Y : 1년
     * - D-W-M1-M3-M6 : 금일 1주일 1개월 3개월 6개월
     * - W-M1-M3-M6-Y : 1주일 1개월 3개월 6개월 1년
     */
    icon: {
      type: String,
      default: '',
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
      iconStr: '-'+ this.icon +'-'
    }
  },
  mounted() {
    console.log('VComDatepicker')
    console.log('iconStr='+ this.iconStr)

    if(this.mode.indexOf('M') != -1) {
      this.startingView = "month";
    } else if(this.mode.indexOf('Y') != -1) {
      this.startingView = "year";
    }
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
      if(this.mode === 'D' || this.mode === 'M' || this.mode === 'Y') {
        this.$emit('return', startDate)
      } else {
        this.$emit('return', [startDate, endDate])
      }
    },
    // 아이콘 클릭시 날짜 세팅(endDate은 항상 현재날짜임)
    setDatePeriod(mode, num) {
      if(num === undefined) {
        num = 1
      }

      this.startDate = this.getValDateType(moment().subtract(num, mode).format('YYYY-MM-DD'))
      this.endDate = this.getValDateType(moment().format('YYYY-MM-DD'))

      this.onChange()
    },
  }
}
</script>
