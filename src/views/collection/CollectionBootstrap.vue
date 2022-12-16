<template>
  <b-container class="bv-example-row">
    <h2>Bootstrap 컴포넌트</h2>
    <br/>
    <b-row>
      <b-col class="b-head top-border">라디오버튼</b-col>
      <b-col cols="9" class="b-body top-border">
        <BComFormRadio
          v-model="radio.selected"
          :options="radio.options"
          @return="onReturnRadio"
        />
        <div class="result-json">{{ this.radio.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Input박스</b-col>
      <b-col cols="9" class="b-body">
        <BComFormInput
          v-model="input.text"
          placeholder="텍스트를 입력해 주세요."
        />
        <div class="result-json">{{ this.input.text }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Select박스</b-col>
      <b-col cols="9" class="b-body">
        <BComFormSelect
          v-model="select.selected"
          :options="select.options"
          addBlankName="-선택-"
        />
        <div class="result-json">{{ this.select.selected }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">Select박스(2개)</b-col>
      <b-col cols="4" class="b-body">
        <BComFormSelect
          id="tt"
          v-model="selectData1.selected"
          :options="selectData1.options"      
          @update:modelValue="chageSelectData()"              
        />        
        <div class="result-json">{{ this.selectData1.selected }}</div>
      </b-col>      
      <b-col cols="1" class="b-body"></b-col>
      <b-col cols="4" class="b-body">
        <BComFormSelect        
          id="tt2"  
          v-model="selectData2.selected"
          :options="selectData2.options"          
        />        
        <div class="result-json">{{ this.selectData2.selected }}</div>
      </b-col>      
    </b-row>    <b-row>
      <b-col class="b-head" style="color:red">주소검색</b-col>
      <b-col cols="4" class="b-body"></b-col>      
      <b-col cols="1" class="b-body"></b-col>
      <b-col cols="4" class="b-body"></b-col>      
    </b-row>
    <b-row>
      <b-col class="b-head">Textarea</b-col>
      <b-col cols="9" class="b-body">
        <BComFormTextarea
          v-model="textarea.text"
          placeholder="설명을 입력해 주세요."
        />
        <div class="result-json">{{ this.textarea.text }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head">테이블</b-col>
      <b-col cols="9" class="b-body">
        <BComTables
          v-model="table.selected"
          :fields="table.fields"
          :items="table.items"
          placeholder="설명을 입력해 주세요."
        />
        <div class="result-json">{{ this.textarea.text }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head"><font color="red">암호화(<strong>SHA-256</strong>)</font></b-col>
      <b-col cols="9" class="b-body">
        <b-row>
          <b-col cols="4" class="b-body">
            <BComFormInput
              v-model="sha256.encoding.input"
              placeholder="텍스트를 입력해 주세요."
            />
          </b-col>
          <b-col cols="2" class="b-body">
            <BComButton
              variant="danger"
              label="인코딩"
            />
          </b-col>
          <b-col cols="6" class="b-body">
            <div class="result-json">{{ this.sha256.encoding.result }}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4" class="b-body">
            <BComFormInput
              v-model="sha256.decoding.input"
              placeholder="텍스트를 입력해 주세요."
            />
          </b-col>
          <b-col cols="2" class="b-body">
            <BComButton
              variant="success"
              label="디코딩"
            />
          </b-col>
          <b-col cols="6" class="b-body">
            <div class="result-json">{{ this.sha256.decoding.result }}</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="b-head"><font color="red">암호화(<strong>BASE64</strong>)</font></b-col>
      <b-col cols="9" class="b-body">
        <b-row>
          <b-col cols="4" class="b-body">
            <BComFormInput
              v-model="base64.encoding.input"
              placeholder="텍스트를 입력해 주세요."
            />
          </b-col>
          <b-col cols="2" class="b-body">
            <BComButton
              variant="danger"
              label="인코딩"
            />
          </b-col>
          <b-col cols="6" class="b-body">
            <div class="result-json">{{ this.base64.encoding.result }}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4" class="b-body">
            <BComFormInput
              v-model="base64.decoding.input"
              placeholder="텍스트를 입력해 주세요."
            />
          </b-col>
          <b-col cols="2" class="b-body">
            <BComButton
              variant="success"
              label="디코딩"
            />
          </b-col>
          <b-col cols="6" class="b-body">
            <div class="result-json">{{ this.base64.decoding.result }}</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BComFormRadio from '@/components/bootstrap/BComFormRadio'
import BComFormInput from '@/components/bootstrap/BComFormInput'
import BComFormSelect from '@/components/bootstrap/BComFormSelect'
import BComFormTextarea from '@/components/bootstrap/BComFormTextarea'
import BComTables from '@/components/bootstrap/BComTables'
import BComButton from '@/components/bootstrap/BComButton'

export default {
  name: 'CollectionBootstrap',
  components: {
    BComFormRadio,
    BComFormInput,
    BComFormSelect,
    BComFormTextarea,
    BComTables,
    BComButton,
  },
  data() {
    return {
      radio: {
        selected: '',
        options: [
          { value:'Y', text:'사용' },
          { value:'N', text:'미사용' },
          { value:'R', text:'보류' },
        ],
      },
      input: {
        text: '',
      },
      select: {
        selected: null,
        options: [
          { value: 'sendDate', text: '등록일' },
          { value: 'contactDate', text: '계약일' },
          { value: 'updateDate', text: '수정일' },
        ],
      },
      selectData1:{
        selected: null,
        options:[
          {value: null, text: '시/도'},
          {value: 'seoul', text: '서울특별시'},
          {value: 'inchoen', text: '인천광역시'}
        ]
      },
      selectData2:{
        selected: null,
        options: [
          {value: null, text: '시/군/구'}
        ],
        list : {
          seoul : [
            {value: 'ganman', text: '강남구'},
            {value: 'seocho', text: '서초구'}
          ],
          inchoen : [
            {value: 'seo', text: '서구'},
            {value: 'yeonsu', text: '연수구'}
          ]
        }
      },
      textarea: {
        text: '',
      },
      table: {
        fields: [
          { key: 'no', label: '번호' },
          { key: 'name', label: '이름' },
          { key: 'sendDate', label: '날짜' },
        ],
        items: [
          { no: 1, name:'이순신', sendDate: '2022-11-20'},
          { no: 2, name:'홍길동', sendDate: '2022-10-08'},
        ],
      },
      datepicker: {
        selected: '',
        selectedArr: ['', ''],
      },
      sha256: {
        encoding: {
          input: '',
          result: '',
        },
        decoding: {
          input: '',
          result: '',
        },
      },
      base64: {
        encoding: {
          input: '',
          result: '',
        },
        decoding: {
          input: '',
          result: '',
        },
      }
    }
  },
  methods: {
    onReturnRadio(res) {
      this.radio.selected = res
    },
    chageSelectData(){      
      var target = document.querySelector('#tt2')      
      while(target.hasChildNodes()){
        target.removeChild(target.firstChild)
      }      
      var opt1 = document.createElement('option')
      opt1.setAttribute('value', '')
      opt1.innerText = '시/군/구'
      target.appendChild(opt1)

      if(this.selectData1.selected != null){
        const list = this.selectData2.list[this.selectData1.selected]                          
        for(var i=0;i<list.length;i++){                  
          var opt2 = document.createElement('option')
          opt2.setAttribute('value', list[i].value)
          opt2.innerText = list[i].text
          target.appendChild(opt2)
        }
      }
    }
  },
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
