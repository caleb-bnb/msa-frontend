<template>
  <div>
    <h2>사진등록</h2>
  </div>
  <br/>
  <v-card>
    <div>화면설계서 위치</div>
    <div>\\192.168.51.24\부동산통합 프로젝트\BNBCOMPANY\기획\02.화면설계서\3.FO_중개회원\</div>
    <div><font color="blue">화면설계_FO_중개회원_매물수정_상세_v0.1_20221212.pptx</font></div>
    <div><font color="blue">14page 참조</font></div>
  </v-card>
  <div>
    <span @click="fileUpload">사진등록</span>
    <input 
      class="hidden"
      ref="imageInput"
      type="file"
      accept="image/*"
      multiple="multiple"
      @change="uploadImage()"
    />
  </div>
  <span>
    {{this.fileInfo.length}} / 20개
  </span>
  <div class="imageArea">
    <ul>
      <li v-for="src, i in preview" :key="src">
        <div>
          {{i+1}}
        </div>
        <div>
          <img :src="src" width="100" height="100" />
        </div>
      </li>
    </ul>
</div>

<!-- <div v-for="file in fileInfo" :key="file">
  {{ file.name }}
</div> -->
</template>

<style scoped>
  ul li {list-style: none;}
  li {float: left;}
  .imageArea{overflow: hidden;}
  .hidden{display:none;}
</style>

<script>
export default {
  name: 'SampleAttachFile',
  components: {},
  data() {
    return {
      fileInfo:[],
      preview:[]
    }
  },
  mounted() {
    console.log('SampleAttachFile')
  },
  methods: {
    fileUpload(){
      this.$refs.imageInput.click();
    },
    uploadImage() {
      if (this.$refs.imageInput.files.length > 20) {
        alert('사진은 20개까지 등록이 가능합니다.');
        return false;
      } else if (this.$refs.imageInput.files.length == 0) {
        return false;
      }
      let files = this.$refs.imageInput.files;
      this.fileInfo = files;

      for (let i=0; i<this.fileInfo.length; i++) {
        this.createPreview(this.fileInfo[i]);
      }
    },
    createPreview(file) {
      this.preview = [];
      
      const reader = new FileReader()
      reader.readAsDataURL(file);
      reader.addEventListener("load", function () {
        fileData(reader.result);
      });

      const fileData = (data) => {
        this.preview.push(data);
      }
    },
  }
}
</script>
