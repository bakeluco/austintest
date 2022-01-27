<template>
  <v-navigation-drawer v-model="$store.state.drawer" temporary>
      <v-divider class="mb-6"></v-divider>
      <v-btn
        variant="text"
        class="elevation-0 mt-2"
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        @click="$store.commit('toggleDrawer')"
        :prepend-icon="link.icon"
        >{{ link.name }}</v-btn
      >
      <v-btn
        block
        variant="text"
        class="elevation-0 mt-6"
        @click="
          $store.commit('toggleTheme');
          $store.commit('toggleDrawer');
        "
        :prepend-icon="'mdi-brightness-6'"
        >{{ $store.state.theme != "light" ? "Light Mode" : "Dark Mode" }}</v-btn
      >
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const links = ref([
      { name: "Home", to: "/", icon: "mdi-home" },
      { name: "Colour Picker", to: "/colourpicker", icon: "mdi-palette" },
      { name: "Customer List", to: "/customerlist", icon: "mdi-account-group" },
      { name: "Timer", to: "/timer", icon: "mdi-clock" },
    ]);
    return { links };
  },
};
</script>
