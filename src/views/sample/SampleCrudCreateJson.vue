<!--
  참조url : https://bootstrap-vue.org/docs/components/table
-->
<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col class="b-head top-border">아이디</b-col>
      <b-col cols="9" class="b-body top-border">
        <BComFormInput v-model="registParams.id" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">중계업소명</b-col>
      <b-col cols="9" class="b-body">
        <BComFormInput v-model="registParams.storeName" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">회원번호</b-col>
      <b-col cols="9" class="b-body">
        <BComFormInput v-model="registParams.userNo" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">설명</b-col>
      <b-col cols="9" class="b-body">
        <BComFormTextarea
          v-model="registParams.description"
          placeholder="설명을 입력해 주세요."
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">사용여부</b-col>
      <b-col cols="9" class="b-body">
        <BComFormRadio
          v-model="registParams.useYn"
          :value="registParams.useYn"
          :options="useYnOptions"
          @return="returnUseYn"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">그룹코드</b-col>
      <b-col cols="9" class="b-body">
        <div style="float:left">
          <BComFormInput
            v-model="registParams.groupCode"
            placeholder="Readonly"
            readonly
          />
        </div>
        <div style="float:left">
          <BComFormInput
            v-model="registParams.groupName"
            placeholder="Readonly"
            readonly
          />
        </div>
        <div style="float:left">
          <b-button
            @click="isVisibleGroupCodePopup=true"
          >검색
          </b-button>
          <BSampleGroupCodePopup
            v-model="isVisibleGroupCodePopup"
            title="그룹코드 조회"
            @modal-cancel="isVisibleGroupCodePopup=false"
            @return="selectedGroupCode"
          />
        </div>
      </b-col>
    </b-row>
    <div style="margin:10px; padding:10px; text-align:center;">
      <b-button @click="onSave">저장</b-button>
      <b-button variant="outline-primary" @click="onCancel">취소</b-button>
    </div>
    <div>
      * 결과
      <div style="padding:10px; border:1px solid #CCCCCC; color:#AAA;">
        {{ this.registParams }}
      </div>
    </div>
  </b-container>
</template>

<script>
import BComFormInput from '@/components/bootstrap/BComFormInput'
import BComFormTextarea from '@/components/bootstrap/BComFormTextarea'
import BComFormRadio from '@/components/bootstrap/BComFormRadio'
import BSampleGroupCodePopup from '@/views/sample/popup/bootstrap/BSampleGroupCodePopup'

export default {
  name: 'SampleCrudCreateJson',
  components: {
    BComFormInput,
    BComFormTextarea,
    BComFormRadio,
    BSampleGroupCodePopup,
  },
  data() {
    return {
      registParams: {
        id: '',
        storeName: '',
        userNo: '',
        description: '',
        useYn: 'N',
        groupCode: '',
        groupName: '',
      },
      useYnOptions: [
        { value:'Y', text:'사용' },
        { value:'N', text:'미사용' },
      ],
      isVisibleGroupCodePopup: false,
    }
  },
  mounted() {
    console.log('SampleCrudCreateJson')
  },
  methods: {
    returnUseYn(res) {
      this.registParams.useYn = res
    },
    closePopup() {
      this.refs['BSampleGroupCodePopup'].hide()
    },
    selectedGroupCode(row) {
      this.registParams.groupCode = row.item.groupCodeId
      this.registParams.groupName = row.item.groupCodeName
    },
    onSave() {
      alert("저장되었습니다.")
    },
    onCancel() {
      alert('취소되었습니다.')
    }
  }
}
</script>

<style scoped>
  .b-head {
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
</style>