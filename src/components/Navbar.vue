<template>
  <v-app-bar density="compact" absolute :color="bg">
    <v-btn
      density="comfortable"
      variant="text"
      icon
      :class="display.mdAndUp.value ? 'd-none' : ''"
      @click="$store.commit('toggleDrawer')"
      ><v-icon>mdi-menu</v-icon></v-btn
    >

    <v-spacer :class="display.mdAndUp.value ? 'd-none' : ''"></v-spacer>

    <div class="d-flex align-center">
      <v-img
        @click="$router.push('/')"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="40"
        :src="require('../assets/logoaustin.png')"
        :class="$store.state.theme == 'dark' ? 'inverted' : ''"
      />
    </div>

    <v-spacer :class="!display.mdAndUp.value ? 'd-none' : ''"></v-spacer>

    <div :class="!display.mdAndUp.value ? 'd-none' : ''">
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        variant="text"
        :to="link.to"
        v-text="link.name"
      >
      </v-btn>
      <v-btn
        variant="text"
        @click="$store.commit('toggleTheme')"
        v-text="$store.state.theme != 'light' ? 'Light Mode' : 'Dark Mode'"
      ></v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const store = useStore();
    const display = useDisplay();
    const links = ref([
      { name: "Home", to: "/" },
      { name: "Colour Picker", to: "/colourpicker" },
      { name: "Customer List", to: "/customerlist" },
      { name: "Timer", to: "/timer" },
    ]);

    const bg = computed(() =>
      store.state.theme == "dark"
        ? store.state.colours.darkbg
        : store.state.colours.austin
    );

    return { links, store, display, bg };
  },
};
</script>

