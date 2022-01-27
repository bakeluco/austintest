<template>
  <v-card>
    <v-card-title> Timer </v-card-title>
    <v-card-text> Just a simple timer. </v-card-text>
    <v-card-text> Play, Pause, Reset, Add + 10 seconds. </v-card-text>
    <v-card-text> Don't worry it'll automatically stop at 0. </v-card-text>
    <div class="d-flex justify-center">
      <span class="timer-value" v-text="timer"></span>
    </div>
    <div class="d-flex justify-center">
      <div class="ma-4">
        <v-btn class="elevation-0" @click="play"
          ><v-icon>mdi-play</v-icon></v-btn
        >
        <v-btn class="elevation-0" @click="stop"
          ><v-icon>mdi-pause</v-icon></v-btn
        >
        <v-btn class="elevation-0" @click="rewind"
          ><v-icon>mdi-rewind</v-icon></v-btn
        >
        <v-btn class="elevation-0" @click="increment"
          ><v-icon>mdi-rewind-10</v-icon></v-btn
        >
      </div>
    </div>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    time: { type: Number },
  },
  setup(props) {
    const counter = ref(0);
    let state = false;

    const timer = computed(() => {
      return (
        (Math.floor(counter.value / 60) > 9
          ? Math.floor(counter.value / 60)
          : "0" + Math.floor(counter.value / 60)) +
        ": " +
        (counter.value % 60 > 9
          ? counter.value % 60
          : "0" + (counter.value % 60))
      );
    });

    let interval;

    function countdown() {
      if (state) return;
      return (interval = setInterval(() => {
        if (!counter.value) return stop();
        counter.value--;
      }, 1000));
    }

    function play() {
      if (!counter.value) return;
      countdown();
      state = true;
    }

    function stop() {
      clearInterval(interval);
      state = false;
    }

    function rewind() {
      counter.value = props.time;
    }

    function increment() {
      counter.value += 10;
    }

    return { counter, stop, play, timer, rewind, increment };
  },

  mounted() {
    this.rewind();
    this.play();
  },
};
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
