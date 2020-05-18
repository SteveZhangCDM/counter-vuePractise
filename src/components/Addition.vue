<template>
  <div>
    <!-- this can be deleted -->
    <h3>Counter is: {{this.$store.state.count}}</h3>
    <button @click="btnHandler">+1</button>
    <button @click="btnHandlerN">+N</button>
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
    }
  }
};
</script>

<style>
</style>