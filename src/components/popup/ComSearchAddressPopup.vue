<template>
  <b-modal
    :id="id"
    :title="title"
    size="lg"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="b-head top-border">지역</b-col>
        <b-col cols="9" class="b-body top-border">
        </b-col>
      </b-row>
      <b-row>
        <b-col class="b-head top-border">상세주소</b-col>
        <b-col cols="9" class="b-body top-border">
        </b-col>
      </b-row>
      <b-row>
        <b-col class="b-head top-border">단지</b-col>
        <b-col cols="9" class="b-body top-border">
        </b-col>
      </b-row>
      <b-row>
        <b-col class="b-head top-border">단지 동/호</b-col>
        <b-col cols="9" class="b-body top-border">
        </b-col>
      </b-row>
    </b-container>

    <template #modal-footer="{ ok, cancel }">
      <b>Custom Footer</b>
      <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'BSampleGroupCodePopup',
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
  },
  data () {
    return {
      table: {
        fields: [
          { key: 'groupCodeId', label: '그룹코드ID' },
          { key: 'groupCodeName', label: '그룹코드명' },
        ],
        items: [
          { groupCodeId: 'GO024', groupCodeName: '매물분류'},
          { groupCodeId: 'MO025', groupCodeName: '회원분류'},
          { groupCodeId: 'SO026', groupCodeName: '매장분류'},
        ],
      },
      selectedRow: null,
    }
  },
  mounted() {
    console.log('ComSearchAddressPopup')
  },
  methods: {
    handleOk() {
      console.log(this.selectedRow)
      if(this.selectedRow === null) {
        alert('선택된 목록이 없습니다.')
      } else {
        this.$emit('return', this.selectedRow)
      }
    },
    handleCancel() {
    },
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