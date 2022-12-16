<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="isPopupOpen"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            color="primary"
          >From the top</v-btn>
        </template>

        <ComDialogPopup @changePopup="changePopup" />

      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import ComDialogPopup from '@/components/ComDialogPopup';

export default {
  name: 'ExerciseDialogs',
  components: {
    ComDialogPopup
  },
  data: () => ({
    isPopupOpen: false,
  }),
  methods: {
    changePopup() {
      this.isPopupOpen = (this.isPopupOpen) ? false : true
    }
  }
}
</script>
