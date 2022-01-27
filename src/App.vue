<template>
  <v-app :theme="$store.state.theme">
    <Navbar />
    <NavigationDrawer />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    NavigationDrawer,
  },
  data: () => ({
    //
  }),
}
</script>

<style>
.inverted {
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
</style>