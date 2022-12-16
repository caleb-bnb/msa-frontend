<template>
    <div>
        <input type="file"
            :id="id"
            @change="readFile"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    </div>
  </template>
<script>
import * as XLSX from 'xlsx'

export default {
  name: 'VComXlsx',
  props: {
    id: {
        type: String,
        default: ''
    }
  },
  methods: {
    readFile(event) {
        // Tag에 excel file input
        const file = event.target.files[0];
        // File Reader
        const reader = new FileReader();
        let tmpResult = {};
        reader.onload = (e) => {
            let data = e.target.result;
            // excel 파일 가져오기
            let excelFile = XLSX.read(data, { type: 'binary' });
            // parsing
            excelFile.SheetNames.forEach(function(sheetName) {
                const roa = XLSX.utils.sheet_to_json(
                    excelFile.Sheets[sheetName],
                    { header: 1 }
                );
                if(roa.length) tmpResult[sheetName] = roa;
            });
            this.result = tmpResult.Sheet1;

            this.$emit('return', tmpResult.Sheet1);
        };
        reader.readAsArrayBuffer(file);
    },
  }
}
</script>