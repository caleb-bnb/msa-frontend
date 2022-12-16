<template>
  <b-modal
    :id="id"
    :title="title"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <BComTables
      id="selectGroupCode"
      :fields="table.fields"
      :items="table.items"
      hover
      selectMode="single"
      selectable
      @return="selectGroupCode"
    />

    <template #modal-footer="{ ok, cancel }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
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
import BComTables from '@/components/bootstrap/BComTables'

export default {
  name: 'BSampleGroupCodePopup',
  components: {
    BComTables
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
    console.log('BSampleGroupCodePopup')
  },
  methods: {
    selectGroupCode(row) {
      this.selectedRow = row
    },
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
