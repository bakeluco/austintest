<template>
  <v-layout
    full-height
    class="justify-center align-center"
    :class="$store.state.theme ? '' : ''"
    :style="{
      backgroundColor:
        $store.state.theme == 'dark'
          ? $store.state.colours.darkbg
          : $store.state.colours.home,
    }"
  >
    <v-card class="ma-4" width="700" height="800">
      <v-card-title> Vue 3 & Vuetify 3 </v-card-title>
      <v-divider />
      <v-card-text>
        Compistion API. Data binding between components provided by Vuex.
      </v-card-text>
      <v-card-text>
        Task 1: Colour picker given a provided prop type Array. However, I've included an option to add custom hex value.
      </v-card-text>
      <v-card-text>
        Task 2: Customer list. Just add text to an array. However, I store said array in Json format on your browser's local storage to simulate an API Rest endpoint. Moreover, I've added the options to edit or delete each entry.
      </v-card-text>
      <v-card-text>
        Task 3: A countdown timer with the ability to stop it. However, I've included the options to play, pause, reset & add 10 seconds.
      </v-card-text>
      <v-card-text> Here are some previews. Thanks! </v-card-text>
      <v-card-actions class="justify-center">
        <v-hover
          v-for="link in links"
          :key="link.name"
          v-slot="{ hover, props }"
        >
          <v-img
            v-bind="props"
            @click="$router.push(link.path)"
            class="shrink text-center align-center text-h6 ma-2"
            :class="hover ? 'elevation-12 text-blue' : ''"
            max-width="200"
            contain
            :src="link.src"
          >
            <span>{{ link.name }}</span>
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
        src: require("../assets/colourPickerDemo.gif"),
      },
      {
        name: "Customer List",
        path: "/customerlist",
        src: require("../assets/customerListDemo.gif"),
      },
      {
        name: "Timer",
        path: "/timer",
        src: require("../assets/customerListDemo.gif"),
      },
    ]);
    return { links };
  },
};
</script>

