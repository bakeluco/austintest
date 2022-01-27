import { createStore } from 'vuex'

export default createStore({
  state: {
    theme : 'light',
    drawer: false,
    colours:{
      austin : '#009fa0',
      home: '#fae2fc',
      colourPicker: '#edd2dc',
      customerList: '#b6cef1',
      timer: '#9ed4d8',
      darkbg: '#141414',
    },
    selectedColour : '#edd2dc',
  },
  mutations: {
    toggleTheme(){
      return this.state.theme = this.state.theme == 'light' ? 'dark' : 'light'
    },
    toggleDrawer(){
      return this.state.drawer = !this.state.drawer
    },
    selectColour(state, value){
      state.selectedColour = value
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
  }
})
