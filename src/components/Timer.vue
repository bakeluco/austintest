<template>
  <div class="mt-100 layout-column align-items-center justify-content-center">
    <div class="timer-value" v-text="timer" data-testid="timer-value"></div>
    <button class="large" @click.prevent="stop = !stop;"
            data-testid="stop-button">
      Stop Timer
    </button>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props:["initial"],
  data(){
    return{
      timer : undefined,
      stop : false,
    }
  },
  methods: {
    startTimer(){
      if ( !this.timer ) return 
      if ( this.stop ) return 
      else setTimeout(() => {
        this.timer--;
        this.startTimer();
      }, 1000)
    },
  },
  mounted() {
    this.timer = this.initial;
    this.startTimer();
  }
}
</script>

<style scoped>
.timer-value {
  font-size: 2em;
  color: var(--heading-color);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
