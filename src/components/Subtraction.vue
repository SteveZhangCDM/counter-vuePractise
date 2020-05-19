<template>
  <div>
    <h3>Counter is:{{count}}</h3>
    <button @click="btnHandler">-1</button>
    <button @click="btnHandlerN">-N</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["minus"]),
    ...mapMutations(["minusN"]),
    btnHandler() {
      this.minus();
    },
    btnHandlerN() {
      this.minusN(3);
    }
  }
};
</script>

<style>
</style>