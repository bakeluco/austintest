<template>
  <v-layout
    full-height
    class="justify-center align-center"
    :style="{ backgroundColor: $store.state.colours.home }"
  >
    <v-card width="700" height="700">
      <v-card-title> Vue 3 & Vuetify 3 </v-card-title>
      <v-divider />
      <v-card-text>
        Mini demo I was asked to put together to showcase my programming
        abilities.
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-hover v-slot="{ hover, props }">
          <v-img
            v-bind="props"
            @click="$router.push('/colourpicker')"
            class="shrink text-center align-center text-h6"
            :class="hover ? 'elevation-12 text-blue' : ''"
            max-width="200"
            contain
            :src="require('../assets/colourPickerDemo.gif')"
          >
            <span>Colour Picker</span>
            <v-icon v-if="hover">mdi-open-in-new</v-icon>
          </v-img>
        </v-hover>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const links = ref([
      {
        name: "Colour Picker",
        path: "/colourpicker",
        src: "../assets/colourPickerDemo.gif",
      },
      { name: "Customer List", path: "/customerlist" },
      { name: "Timer", path: "/timer" },
    ]);
    return { links };
  },
};
</script>

<style scoped>
/* img:hover {
  border-style: solid;
  border-width: thick;
} */
</style>