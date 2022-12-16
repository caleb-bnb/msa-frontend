<template>
  <b-container class="bv-example-row">
    <h2>Vue 컴포넌트</h2>
    <br/>
    <b-row>
      <b-col class="b-head top-border">라디오버튼</b-col>
      <b-col cols="9" class="b-body top-border">
        <VComRadio
          v-model="radio.selected"
          :options="radio.options"
          inline
        />
        <div class="result-json">{{ this.radio.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">체크박스</b-col>
      <b-col cols="9" class="b-body">
        <VComCheckbox
            v-model="checkbox.selected"
            :items="checkbox.items"
            itemValue="value"
            itemTitle="title"
            :itemSelected="checkbox.selected"
            @return="onReturnCheckbox"
          />
        <div class="result-json">{{ this.checkbox.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">버튼</b-col>
      <b-col cols="9" class="b-body">
        <VComButton
          label="전송"
          @click="onClickButton('전송')"
        />
        <VComButton
          color="primary"
          label="확인"
          prependIcon="mdi-vuetify"
          @click="onClickButton('확인')"
        />
        <VComButton
          color="warning"
          label="취소"
          appendIcon="mdi-vuetify"
          @click="onClickButton('취소')"
          />
        <VComButton
          color="success"
          label="저장"
          @click="onClickButton('저장')"
          />
        <div class="result-json">{{ this.button.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Select박스</b-col>
      <b-col cols="9" class="b-body">
        <VComSelect
            v-model="select.selected"
            :items="select.items"
          />
        <div class="result-json">{{ this.select.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Input박스</b-col>
      <b-col cols="9" class="b-body">
        <VComTextField
            v-model="input.text"
        />
        <div class="result-json">{{ this.input.text }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">날짜선택</b-col>
      <b-col cols="9" class="b-body">
        <VComDatepicker
          v-model="datepicker.selected"
          :startValue="datepicker.selected"
          mode="D"
          @return="onReturnDatepicker"
        />
        <div class="result-json" style="clear:both">{{ this.datepicker.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">날짜선택(기간)</b-col>
      <b-col cols="9" class="b-body">
        <VComDatepicker
          v-model="datepicker.selectedArr"
          :startValue="datepicker.selectedArr[0]"
          :endValue="datepicker.selectedArr[1]"
          mode="DD"
          @return="onReturnDatepickerArr"
        />
        <div class="result-json" style="clear:both">{{ this.datepicker.selectedArr }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">날짜선택(기간선택)</b-col>
      <b-col cols="9" class="b-body"> 
        <VComDatepicker
          v-model="datepicker.selectedIconArr"
          mode="DD"
          icon="D-W-M1-M3-M6-Y"
          @return="onReturnDatepickerIconArr"
        />
        <div class="result-json" style="clear:both">{{ this.datepicker.selectedIconArr }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">파일선택</b-col>
      <b-col cols="9" class="b-body">
        <VComFileUpload
          label="File input"
          accept=""
          v-model="fileInfo"
        />
        <div class="result-json" v-for="file in fileInfo" :key="file">
          {{ file.name }}
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Range Slider</b-col>
      <b-col cols="9" class="b-body">
        <VComRangeSlider
          v-model="rangeSlider"
          min="10000000"
          max="200000000"
        />
      <div class="result-json test">[{{numberToKorean(this.rangeSlider[0])}}, {{numberToKorean(this.rangeSlider[1])}}]</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">매물 종류</b-col>
      <b-col cols="9" class="b-body">
        <VComTextField
          v-model="inputSearch1.text"
          isAppendInnerIcon="true"
          placeholder="매물종류를 선택해 주세요."
          @click:append-inner="onClickInputSearch1"
        />
        <ComMaemulTypePopup
          v-model="inputSearch1.visible"
          :items="maemulType.items"
          :itemSelected="maemulType.selected"
          title="매물종류 조회"
          @modal-cancel="inputSearch1.visible=false"
          @return="onReturnInputSearch1"
        />
        <div class="result-json">{{ this.maemulType.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">소재지(지역)</b-col>
      <b-col cols="9" class="b-body">
        <VComTextField
          v-model="inputSearch2.text"
          isAppendInnerIcon="true"
          placeholder="소재지를 선택해 주세요."
          @click:append-inner="onClickInputSearch2"
        />
        <ComSearchAddressPopup
          v-model="inputSearch2.visible"
          title="소재지(지역)"
          @modal-cancel="inputSearch2.visible=false"
          @return="onReturnInputSearch2"
        />
        <div class="result-json test">{{ this.inputSearch2.text }}</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from 'moment'
import VComRadio from '@/components/vue/VComRadio.vue';
import VComCheckbox from '@/components/vue/VComCheckbox'
import VComButton from '@/components/vue/VComButton'
import VComSelect from '@/components/vue/VComSelect'
import VComTextField from '@/components/vue/VComTextField'
import VComDatepicker from '@/components/vue/VComDatepicker'
import VComFileUpload from '@/components/vue/VComFileUpload'
import VComRangeSlider from '@/components/vue/VComRangeSlider'
import ComMaemulTypePopup from '@/components/popup/ComMaemulTypePopup'
import ComSearchAddressPopup from '@/components/popup/ComSearchAddressPopup'

export default {
  name: 'CollectionVue',
  components: {
    VComRadio,
    VComCheckbox,
    VComButton,
    VComSelect,
    VComTextField,
    VComDatepicker,
    VComFileUpload,
    VComRangeSlider,
    ComMaemulTypePopup,
    ComSearchAddressPopup,
  },
  data: () => ({
    radio: {
      selected: 'N',
      options: [
        { value:'Y', label: '예' },
        { value:'N', label: '아니오' },
      ]
    },
    checkbox: {
      selected: ['2', '3'],
      items: [
        { value: '1', title: '회원관리' },
        { value: '2', title: '발송관리' },
        { value: '3', title: '수동발송관리' },
      ],
    },
    button: {
      selected: '',
    },
    select: {
      selected: { value: 'seoul', title: '서울' },
      items: [
        { value: 'seoul', title: '서울' },
        { value: 'busan', title: '부산' },
        { value: 'kwangju', title: '광주' },
      ],
    },
    input: {
      text: ''
    },
    datepicker: {
      selected: moment().format('YYYY-MM-DD'),
      selectedArr: [moment().subtract(7, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
      selectedIconArr: ['', ''],
    },
    files: {
      selectedArr: [],
    },
    inputSearch1: {
      text: '',
      visible: false,
    },
    inputSearch2: {
      text: '',
      visible: false,
    },
    rangeSlider: [
      10000000,
      200000000
    ],
    fileInfo:[],
    maemulType: {
      selected: [],
      items: [
        { value: 'APT', title: '아파트' },
        { value: 'LOTS', title: '분양권' },
        { value: 'OFT', title: '오피스텔' },
        { value: 'RED', title: '재개발' },
        { value: 'HOU', title: '주택' },
        { value: 'ONE', title: '원룸' },
        { value: 'SHP', title: '상가점포' },
        { value: 'OFC', title: '사무실' },
        { value: 'FAC', title: '공장창고' },
        { value: 'BUD', title: '빌딩건물' },
        { value: 'LAD', title: '토지' },
        { value: 'ETC', title: '기타' },
      ],
    }
  }),
  mounted() {
    console.log('CollectionVue')
  },
  methods: {
    onReturnCheckbox(res) {
      this.checkbox.selected = res
    },
    onClickButton(res) {
      this.button.selected = res
    },
    onReturnDatepicker(res) {
      this.datepicker.selected = res
    },
    onReturnDatepickerArr(res) {
      this.datepicker.selectedArr = res
    },
    onReturnDatepickerIconArr(res) {
      this.datepicker.selectedIconArr = res
    },
    onClickInputSearch1() {
      this.inputSearch1.visible = true
    },
    onReturnInputSearch1(res) {
      this.maemulType.selected = res;
      this.inputSearch1.text = '';

      for (let i=0; i<res.length; i++) {
        for (let j=0; j<this.maemulType.items.length; j++) {
          if (this.maemulType.items[j].value == res[i]) {
            this.inputSearch1.text += this.maemulType.items[j].title + ', ';
          }
        }
      }
      this.inputSearch1.text = this.inputSearch1.text.replace(/,\s*$/, "");
    },
    onClickInputSearch2() {
      this.inputSearch2.visible = true
    },
    onReturnInputSearch2(res) {
      console.log(res)
    },
    numberToKorean(number){
      let inputNumber  = number < 0 ? false : number;
      let unitWords    = ['', '만', '억'];
      let splitUnit    = 10000;
      let splitCount   = unitWords.length;
      let resultArray  = [];
      let resultString = '';

      for (let i = 0; i < splitCount; i++){
          let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
          unitResult = Math.floor(unitResult);
          if (unitResult > 0){
              resultArray[i] = unitResult;
          }
      }

      for (let i = 0; i < resultArray.length; i++){
          if(!resultArray[i]) continue;
          resultString = String(resultArray[i]) + unitWords[i] + resultString;
      }

      return resultString + '원';
    }
  }
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
