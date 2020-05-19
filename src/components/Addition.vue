<template>
  <div>
    <!-- this can be deleted -->
    <h3>Counter is: {{this.$store.state.count}}</h3>
    <button @click="btnHandler">+1</button>
    <button @click="btnHandlerN">+N</button>
    <button @click="btnHandlerAsync">+1 Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnHandler() {
      this.$store.commit("add");
    },
    btnHandlerN() {
      this.$store.commit("addN", 3);
    },
    //异步地址 count 自增 +1
    btnHandlerAsync() {
      this.$store.dispatch("addAsync", 5);
    }
  }
};
</script>

<style>
</style>