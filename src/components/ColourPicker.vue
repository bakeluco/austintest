<template>
  <v-card class="pa-2" height="600" width="400">
    <v-card-title> Colour Picker </v-card-title>
    <v-card-text>
      Please, select a colour by clicking on each box. Feel free to provide your
      own custom hex here:
    </v-card-text>
    <v-text-field
      class="mx-4"
      label="Hex Value"
      v-model="$store.state.selectedColour"
    />
    <div class="canvas" :style="{ backgroundColor: selectedColour }">
      <p class="text-center mx-auto px-5">{{ selectedColour }}</p>
    </div>
    <div class="d-flex justify-center py-8">
      <div
        v-for="colour in colours"
        class="color-box ma-1"
        @click="selectColor(colour)"
        :style="{ backgroundColor: colour }"
        :class="{ selected: selectedColour === colour }"
        :key="colour"
      ></div>
    </div>
  </v-card>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ColorPicker",
  props: {
    colours: { type: Array },
  },
  setup() {
    const store = useStore();

    const selectedColour = computed(() => store.state.selectedColour);

    const selectColor = (colour) => store.commit("selectColour", colour);

    function print() {
      console.log(store.state.selectedColour);
    }

    return { selectedColour, selectColor, print };
  },
  data() {
    return {
      // selectedColor: "",
    };
  },
  methods: {
    // selectColor(color) {
    //   return (this.selectedColor = color);
    // },
  },
};
</script>

<style scoped>
.canvas {
  width: 100%;
  height: 280px;
  transition: background-color 0.3s ease-in-out;
  position: relative;
}

.canvas p {
  font-size: 0.8em;
  position: absolute;
  bottom: 4px;
  width: 30%;
  background: rgba(255, 255, 255, 0.6);
  left: 35%;
  font-style: italic;
}

.color-box {
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
}

.color-box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid black;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
}

.color-box.selected::after {
  opacity: 1;
}

.divider {
  color: rgba(0, 0, 0, 0.12);
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0px;
  max-height: 0px;
  border: solid;
  border-width: thin 0 0 0;
  transition: inherit;
}
</style>
