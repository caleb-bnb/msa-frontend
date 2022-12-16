<!--
  참조url : https://bootstrap-vue.org/docs/components/table
-->
<template>
  <b-card>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="2">아이디</b-col>
        <b-col cols="4">
          <BComFormInput v-model="searchParams.userId" placeholder="아이디를 입력해 주세요." />
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
        <b-col cols="2">사용여부</b-col>
        <b-col cols="10">
          <VComRadio
            v-model="searchParams.useYn"
            :options="useYnOptions"
            inline
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
  <div class="text-right">
    <VComButton
      color="primary"
      label="등록"
      @click="onBtnRegist"
    />
    <VComButton
      color="primary"
      label="수정"
      :disabled="button.disabledModify"
      @click="onBtnModify"
    />
    <VComButton
      color="primary"
      label="삭제"
      :disabled="button.disabledDelete"
      @click="onBtnDelete"
    />
  </div>
  <BComTables
    :fields="grid.fields"
    :items="grid.items"
    hover
    selectMode="single"
    selectable
    @return="onSelectRow"
  />
</template>

<script>
import _ from 'lodash'
import BComFormInput from '@/components/bootstrap/BComFormInput'
import BComFormSelect from '@/components/bootstrap/BComFormSelect'
import VComDatepicker from '@/components/vue/VComDatepicker'
import BComTables from '@/components/bootstrap/BComTables';
import VComRadio from '@/components/vue/VComRadio'
import VComButton from '@/components/vue/VComButton'
import { api } from '@/api/sample'

export default {
  name: 'SampleCrudList',
  components: {
    BComFormInput,
    BComFormSelect,
    VComDatepicker,
    VComRadio,
    VComButton,
    BComTables,
  },
  data() {
    return {
      searchParams: {
        userId: '',
        storeName: '',
        userNo: '',
        selectType: 'contactDate',
        createDate: ['', ''],
        useYn: 'Y',
      },
      selectTypeOptions: [
        { value: 'sendDate', text: '등록일' },
        { value: 'contactDate', text: '계약일' },
      ],
      useYnOptions: [
        { value: 'Y', label: '사용' },
        { value: 'N', label: '미사용' },
      ],
      grid: {
        selectedRow: null,
        fields: [
          { key: 'userNo', label: '회원번호' },
          { key: 'storeName', label: '중개업소명' },
          { key: 'userId', label: '아이디' },
          { key: 'groupName', label: '그룹명' },
          { key: 'useYnName', label: '사용여부' },
          { key: 'createDateStr', label: '등록일' },
        ],
        items: [],
      },
      button: {
        disabledModify: true,
        disabledDelete: true,
      },
    }
  },
  mounted() {
    console.log('SampleCrudList')
    this.onSearch()
  },
  methods: {
    getSearchParams(method) {
      var _searchParams = _.cloneDeep(this.searchParams)
      var _createDate = _searchParams['createDate']
      if(_createDate.length > 0) {
        _searchParams['startDate'] = _createDate[0]
      }
      if(_createDate.length > 1) {
        _searchParams['endDate'] = _createDate[1]
      }

      if(method.toUpperCase() === 'GET') {
        delete _searchParams['createDate']
      }

      return _searchParams
    },
    setSearchDate(createDate) {
      this.searchParams.createDate = createDate
    },
    onSelectRow(row) {
      this.grid.selectedRow = row
      if(row.index === -1){
        this.button.disabledModify = true
        this.button.disabledDelete = true
      } else {
        this.button.disabledModify = false
        this.button.disabledDelete = false
      }
    },
    onSearch() {
      api.getList('/v1/sample/joinList', this.getSearchParams('get'))
      .then((res) => {
        console.log(res)
        this.grid.items = res.data
      })
    },
    onBtnValidate() {
      if(this.grid.selectedRow === null) {
        alert('선택된 목록이 없습니다.')
        return false
      }
      if(this.grid.selectedRow.index === -1) {
        alert('선택된 목록이 없습니다.')
        return false
      }

      return true
    },
    onBtnRegist() {
      this.$router.push('/sample/crudCreate')
    },
    onBtnModify() {
      if(this.onBtnValidate() === false) {
        return
      }

      // 등록화면에 선택된 row의 값을 가지고 이동한다.
      this.$router.push({
        name: 'SampleCrudCreate',
        query: this.grid.selectedRow.item,
      })
    },
    onBtnDelete() {
      if(this.onBtnValidate() === false) {
        return
      }

      if(confirm('정말삭제하시겠습니까?')) {
        api.deleteUser('/v1/sample/delete/'+ this.grid.selectedRow.item.userId, this.searchParams).then((res) => {
          console.log(res)
          alert('삭제되었습니다.')
          this.onSearch()
        }).catch(error => {
          console.log(error.response)
        })
      }
    },
  }
}
</script>
