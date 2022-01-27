<template>
  <v-app-bar density="compact" absolute :color="$store.state.colours.austin">
    <div class="d-flex align-center">
      <a href="/">
        <v-img
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
          :src="
            $store.state.theme == 'light'
              ? require('../assets/logodark.png')
              : require('../assets/logolight.png')
          "
        />
      </a>
    </div>

    <v-spacer></v-spacer>
    <v-btn :color="$store.state.colours.austin" text @click="$router.push('/')"
      >home</v-btn
    >
    |
    <v-btn
      :color="$store.state.colours.austin"
      text
      @click="$router.push('/colourpicker')"
      >Colour Picker</v-btn
    >
    |
    <v-btn
      :color="$store.state.colours.austin"
      text
      @click="$router.push('/customerlist')"
      >Customer List</v-btn
    >
    |
    <v-btn
      :color="$store.state.colours.austin"
      text
      @click="$router.push('/timer')"
      >Timer</v-btn
    >
    |
    <v-btn
      text
      :color="$store.state.colours.austin"
      @click="$store.commit('toggleTheme')"
      v-text="$store.state.theme != 'light' ? 'Light Mode' : 'Dark Mode'"
    ></v-btn>
  </v-app-bar>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return { store };
  },
};
</script>