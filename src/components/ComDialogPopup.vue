<template>
  <v-card>
    <v-toolbar
      color="primary"
      title="Opening from the top"
    ></v-toolbar>
    <v-card-text>
      <div class="text-h2 pa-12">Hello world!</div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        variant="text"
        @click="changePopup()"
      >Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ComDialogPopup',
  data: () => ({}),
  methods: {
    changePopup() {
      this.$emit("changePopup");
    }
  }
}
</script>
