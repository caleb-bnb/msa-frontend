<!--
  참조url : https://bootstrap-vue.org/docs/components/table
-->
<template>
  <b-card>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="2">아이디</b-col>
        <b-col cols="4">
          <BComFormInput v-model="searchParams.id" placeholder="아이디를 입력해 주세요." />
        </b-col>
        <b-col cols="2">중계업소명</b-col>
        <b-col cols="4">
          <BComFormInput v-model="searchParams.storeName" placeholder="중계업소를 입력해 주세요." />
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="2">회원번호</b-col>
        <b-col cols="10">
          <BComFormInput v-model="searchParams.userNo" placeholder="회원번호를 입력해 주세요." />
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="2">기간</b-col>
        <b-col cols="10">
          <b-row class="text-center">
            <b-col cols="3">
              <BComFormSelect
                v-model="searchParams.selectType"
                :options="selectTypeOptions"
                addBlankName="-선택-"
              />
            </b-col>
            <b-col cols="9">
              <VComDatepicker
                v-model="searchParams.searchDate"
                mode="DD"
                @return="setSearchDate"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="2">발송경로</b-col>
        <b-col cols="10">
          <VComCheckbox
            v-model="searchParams.sendRoute"
            :values="searchParams.sendRoute"
            :items="sendRouteItems"
            itemValue="value"
            itemTitle="title"
            @return="setSendRoute"
          />
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="2">
          <VComButton color="primary" label="검색" />
        </b-col>
        <b-col cols="10" style="color:#bbb">{{ searchParams }}</b-col>
      </b-row>
    </b-container>
  </b-card>
  <br />
  <BComTables :fields="grid.fields" :items="grid.items" />
  <b-pagination v-model="page.currentPage" :total-rows="page.totalRows" :per-page="page.perPage" align="center"></b-pagination>
</template>

<script>
import BComFormInput from '@/components/bootstrap/BComFormInput'
import BComFormSelect from '@/components/bootstrap/BComFormSelect'
import VComDatepicker from '@/components/vue/VComDatepicker'
import BComTables from '@/components/bootstrap/BComTables';
import VComCheckbox from '@/components/vue/VComCheckbox'
import VComButton from '@/components/vue/VComButton'

export default {
  name: 'SampleCrudListJson',
  components: {
    BComFormInput,
    BComFormSelect,
    VComDatepicker,
    VComCheckbox,
    VComButton,
    BComTables,
  },
  data() {
    return {
      searchParams: {
        id: '',
        storeName: '',
        userNo: '',
        selectType: 'contactDate',
        searchDate: [],
        sendRoute: ['3', '1'],
      },
      selectTypeOptions: [
        { value: 'sendDate', text: '등록일' },
        { value: 'contactDate', text: '계약일' },
      ],
      sendRouteItems: [
        { value: '1', title: '회원관리' },
        { value: '2', title: '발송관리' },
        { value: '3', title: '수동발송관리' },
      ],
      grid: {
        fields: [
          { key: 'no', label: '번호' },
          { key: 'sendRoute', label: '발송경로' },
          { key: 'userNo', label: '회원번호' },
          { key: 'storeName', label: '중개업소명' },
          { key: 'id', label: '아이디' },
          { key: 'sendDate', label: '발송일' },
        ],
        items: [
          { no: 1, sendRoute: '회원관리', userNo: '1342351', storeName: '별공인중개사', id: 'byb303', sendDate: '2022-11-20'},
          { no: 2, sendRoute: '회원관리', userNo: '1342352', storeName: '행운공인중개사', id: 'ayb870', sendDate: '2022-10-08'},
          { no: 3, sendRoute: '회원관리', userNo: '1342353', storeName: '키움공인중개사', id: 'bbb300', sendDate: '2022-09-08'},
          { no: 4, sendRoute: '계약관리', userNo: '1342354', storeName: '미래공인중개사', id: 'trw303', sendDate: '2022-11-01'},
          { no: 5, sendRoute: '계약관리', userNo: '1342355', storeName: '하늘공인중개사', id: 'reweer', sendDate: '2022-11-20'},
          { no: 6, sendRoute: '회원관리', userNo: '1342356', storeName: '별공인중개사', id: 'choioee', sendDate: '2022-11-17'},
          { no: 7, sendRoute: '계약관리', userNo: '1342357', storeName: '땅공인중개사', id: 'sseref', sendDate: '2022-10-18'},
          { no: 8, sendRoute: '회원관리', userNo: '1342358', storeName: '충정로공인중개사', id: '133303', sendDate: '2022-08-19'},
          { no: 9, sendRoute: '회원관리', userNo: '1342359', storeName: '충무로공인중개사', id: 'stb032', sendDate: '2022-07-21'},
          { no: 10, sendRoute: '회원관리', userNo: '1342360', storeName: '소공공인중개사', id: 'bcut043', sendDate: '2022-08-22'},
          { no: 11, sendRoute: '회원관리', userNo: '1342361', storeName: '합동공인중개사', id: 'zzz3235', sendDate: '2022-12-23'},
          { no: 12, sendRoute: '계약관리', userNo: '13423562', storeName: '서울공인중개사', id: 'nnn313', sendDate: '2022-11-30'},
        ],
      },
      page: {
        perPage: 10,
        currentPage: 1,
        totalRows: 112,
      }
    }
  },
  methods: {
    setSendRoute(sendRoute) {
      this.searchParams.sendRoute = sendRoute
    },
    setSearchDate(searchDate) {
      this.searchParams.searchDate = searchDate
    }
  }
}
</script>
