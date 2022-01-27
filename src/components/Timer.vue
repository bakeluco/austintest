<template>
  <v-card>
    <v-card-title> Timer </v-card-title>
    <v-card-text>
      Just a simple timer. Actions available : Play, Pause, Reset, Add + 10
      seconds.
    </v-card-text>
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
    const state = ref(false);

    // if(!counter.value || state.value) return
    // play();
    // localStorage.setItem("counter", counter.value)

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

    function setCounter(value) {
      counter.value = value;
    }

    function play() {
      // if (state || !counter.value) return
      setInterval(() => {
        counter.value--;
      }, 1000);
    }

    function stop() {
      state.value = true;
    }

    function rewind() {
      counter.value = props.time;
    }

    function increment() {
      counter.value += 10;
    }

    return { counter, stop, play, setCounter, timer, rewind, increment  };
  },

  mounted() {
    this.rewind()
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
