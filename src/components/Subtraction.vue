<template>
  <div>
    <h3>Counter is:{{count}}</h3>
    <h3>{{showNum}}</h3>
    <button @click="btnHandler">-1</button>
    <button @click="btnHandlerN">-N</button>
    <button @click="minusAsync">-1 Async</button>
    <button @click="minusNAsync(5)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"])
  },
  methods: {
    ...mapMutations(["minus"]),
    ...mapMutations(["minusN"]),
    btnHandler() {
      this.minus();
    },
    btnHandlerN() {
      this.minusN(3);
    },
    ...mapActions(["minusAsync", "minusNAsync"])
  }
};
</script>

<style>
</style>