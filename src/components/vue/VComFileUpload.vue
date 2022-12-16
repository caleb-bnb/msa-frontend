<template>
  <v-file-input
    v-model="files"
    multiple
    show-size
    counter
    variant="outlined"
    :label="label"
    :accept="accept"
    @update:modelValue="FileUpload"
  >
  <template v-slot:selection="{ fileNames }">
    <template v-for="(fileName, index) in fileNames" :key="fileName">
      <v-chip
        v-if="index < 2"
        color="deep-purple-accent-4"
        label
        size="small"
        class="mr-2"
      >
        {{ fileName }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="text-overline text-grey-darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </template>
  </v-file-input>
</template>

<script>
export default {
  name: 'VComFileUpload',
  props: {
    accept: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'File input',
    },
  },
  data(){
    return{
      files: [],
    }
  },
  mounted() {
  },
  methods: {
    FileUpload() {
      console.log('file:', this.files);
    }
  }
}
</script>
