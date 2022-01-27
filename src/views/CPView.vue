<template>
  <v-layout
    full-height
    class="justify-center align-center"
    :style="{ backgroundColor: $store.state.selectedColour }"
  >
    <ColourPicker :colours="colours" />
  </v-layout>
</template>
<script>
import ColourPicker from "../components/ColourPicker.vue";
import { ref } from "vue";

export default {
  components: {
    ColourPicker,
  },
  setup() {
    const colours = ref([
      "#009fa0",
      "#fae2fc",
      "#edd2dc",
      "#b6cef1",
      "#9ed4d8",
    ]);

    return { colours };
  },
};
</script>