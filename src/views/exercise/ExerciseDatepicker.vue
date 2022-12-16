<!--
    vue3-datepicker 사용법 : https://www.npmjs.com/package/vue3-datepicker
    BootStrap Datepicker 사용법 : https://bootstrap-vue.org/docs/components/form-datepicker
 -->
<template>
  <div style="background-color:#FFFFFF; margin: 3px">
    <v-row justify="space-around">
      <v-col cols="4">
        <Vue3Datepicker
          v-model="datePicker1"
        />
      </v-col>
      <v-col cols="4">
        {{ datePicker1 }}
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </div>
  <v-row justify="space-around">
    <v-col cols="4">
      <ComDatepicker />
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row justify="space-around">
    <v-col cols="4">
      <ComDatepicker
        mode="DD"
        startValue="2022-10-11"
        endValue="2022-11-11"
      />
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script>
// import { ref } from 'vue'
// import moment from 'moment'
import Vue3Datepicker from 'vue3-datepicker';
import ComDatepicker from '@/components/ComDatepicker';

export default {
  name: 'ExerciseDatepicker',
  components: {
    Vue3Datepicker,
    ComDatepicker,
  },
  data () {
    return {
      datePicker1: null,
    }
  },
  watch: {
    datePicker1(newVal) {
      let dateValue = newVal
      if(newVal != null) {
        // dateValue = moment(newVal).format('YYYY-MM-DD')
      }

      this.datePicker1 = dateValue
    }
  },
  mounted() {
    console.log(this.nowDate)
  },
  methods: {
  },
}
</script>

<style scoped>
  .my-row {
    background-color: '#EFEFEF';
  }
</style>