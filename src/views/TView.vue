<template>
  <v-layout
    full-height
    class="justify-center align-center"
    :style="{ backgroundColor: $store.state.colours.timer }"
  >
    <Timer :time="time" />
  </v-layout>
</template>
<script>
import { ref } from "vue";
import Timer from "../components/Timer.vue";

export default {
  components: {
    Timer,
  },
  setup() {
    const time = ref(120);

    return { time };
  },
};
</script>
