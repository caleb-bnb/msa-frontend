<template>
  <div class="text-right">
    <VComButton
      color="primary"
      label="엑셀업로드"
      @click="onExcelUpload"
    />
    <VComXlsx
      id="excelUpload"
      class="file-upload"
      @return="sendTbdata">
    </VComXlsx>
  </div>
  <!-- <BComTables
    :fields="grid.fields"
    :items="grid.items"
    hover
  /> -->
  <VComTables
    :header="grid.header"
    :tbdata="grid.tbdata"
  ></VComTables>
</template>

<script>
/* import BComTables from '@/components/bootstrap/BComTables' */
import VComButton from '@/components/vue/VComButton'
import VComXlsx from '@/components/vue/VComXlsx'
import VComTables from '@/components/vue/VComTables'

export default {
  name: 'SampleExcelUpload',
  components: {
    VComButton,
    /* BComTables, */
    VComXlsx,
    VComTables
  },
  data() {
    return {
      grid: {
        /* selectedRow: null,
        fields: [
          { key: 'userNo', label: '회원번호' },
          { key: 'storeName', label: '중개업소명' },
          { key: 'id', label: '아이디' },
          { key: 'useYn', label: '사용여부' },
          { key: 'createDate', label: '등록일' },
        ],
        items: [
          {userNo: 1, storeName: '중개업소명', id: '아이디', useYn: 'Y', createDate: '2022-12-20'}
        ], */
        header: [],
        tbdata: []
      },
      button: {
        disabledModify: true,
        disabledDelete: true,
      },
    }
  },
  mounted() {
    console.log('SampleExcelUpload')
  },
  methods: {
    onExcelUpload() {
      document.getElementById('excelUpload').click();
    },
    sendTbdata(res) {
      this.grid.header = res[0];
      res.splice(0, 1);
      this.grid.tbdata = res;
    }
  }
}
</script>
<style scoped>
.file-upload {
  display: none;
}
</style>
