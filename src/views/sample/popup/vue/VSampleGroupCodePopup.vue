<template>
  <v-dialog
    v-model="isVisible"
  >
    <v-card>
      <v-toolbar
        color="primary"
        title="그룹코드 조회"
      ></v-toolbar>
      <v-card-text>
        <div class="text-h2 pa-12">Hello world!</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          variant="text"
          @click="isVisible = false"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'VSampleGroupCodePopup',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isVisible: this.value,
    }
  },
  mounted() {
  },
  methods: {
    onClose() {
      this.isVisible = false
    }
  }
}
</script>
