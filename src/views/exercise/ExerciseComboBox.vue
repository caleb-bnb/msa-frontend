<template>
  <v-row justify="space-around">
    <v-col cols="4">
      <v-select
        id="combobox1"
        v-model="combobox1.value"
        :label="combobox1.label"
        :items="combobox1.items"
      ></v-select>
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row justify="space-around">
    <v-col cols="4">
      <v-select
        id="combobox2"
        v-model="combobox2.value"
        :label="combobox2.label"
        :items="combobox2.items"
      ></v-select>
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row justify="space-around">
    <v-col cols="4">
      <v-select
        id="combobox3"
        v-model="combobox3.value"
        :label="combobox3.label"
        :items="combobox3.items"
        item-value="value"
        item-title="title"
        return-object
      ></v-select>
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row justify="space-around">
    <v-col cols="4">
      <v-select
        id="combobox41"
        v-model="combobox41.value"
        :label="combobox41.label"
        :items="combobox41.items"
        item-value="value"
        item-title="title"
        return-object
        @update:modelValue="changeCombobox41()"
      ></v-select>
    </v-col>
    <v-col cols="4">
      <v-select
        id="combobox42"
        v-model="combobox42.value"
        :label="combobox42.label"
        :items="combobox42.items"
        item-value="value"
        item-title="title"
        return-object
      ></v-select>
    </v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row>
    <v-col cols="4">3단콤보 개발 요청</v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'ExerciseComboBox',
  data () {
    return {
      combobox1: {
        id: 'combobox1',
        label: 'Array',
        value: '',
        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
      },
      combobox2: {
        id: 'combobox2',
        label: '',
        value: 'Colorado',
        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
      },
      combobox3: {
        id: 'combobox3',
        label: 'Value-Title',
        value: { value: 'florida', title: 'Florida' },
        items: [
            { value: 'california', title: 'California' },
            { value: 'colorado', title: 'Colorado' },
            { value: 'florida', title: 'Florida' },
            { value: 'georgia', title: 'Georgia' },
            { value: 'texas', title: 'Texas' },
            { value: 'wyoming', title: 'Wyoming' },
        ],
      },
      combobox41: {
        label: 'Level1',
        value: { value: 'vegetable', title: '야채' },
        items: [
          { value: 'fruits', title: '과일' },
          { value: 'vegetable', title: '야채' },
        ],
      },
      combobox42: {
        label: 'Level2',
        value: null,
        items: [],
        list:{
          fruits: [
            { value: 'tangerine', title: '귤' },
            { value: 'watermelon', title: '수박' },
            { value: 'banana', title: '바나나' },
            { value: 'apple', title: '사과' },
            { value: 'mango', title: '망고' },
            { value: 'pineapple', title: '파인애플' },
          ],
          vegetable: [
            { value: 'lettuce', title: '상추' },
            { value: 'radish', title: '무우' },
            { value: 'wombok ', title: '배추' },
            { value: 'Broccoli ', title: '브로컬리' },
            { value: 'carrot', title: '당근' },
            { value: 'tomato', title: '토마토' },
          ]
        },
      },
    }
  },
  mounted() {
    if(!_.isEmpty(this.combobox41.value)) {
      this.changeCombobox41();
    }
  },
  methods: {
    changeCombobox41() {
      console.log(this.combobox41.value)
      console.log(this.combobox41.value.value)
      console.log(this.combobox42.list[this.combobox41.value.value])

      this.combobox42.value = null
      this.combobox42.items = this.combobox42.list[this.combobox41.value.value]
    },
  },
}
</script>
